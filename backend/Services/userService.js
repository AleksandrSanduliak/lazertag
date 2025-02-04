const bcrypt = require('bcrypt');
const uuid = require('uuid');
const UserDto = require("../dto/userDto");
const UserInfoDto = require("../dto/userInfoDto");
const pool = require("../DB/db");
const TokenService = require("./tokenService");
const MailService = require("./mailService");
const ApiError = require("../exeptions/apiError");

class UserService {
  async registration(data) {
    const result = await pool.query('SELECT * FROM users WHERE email = \$1', [data.email]);
    if (result.rows.length > 0) {
      throw ApiError.BadRequest("Пользователь с таким email уже зарегистрирован");
    }
    const hashPassword = await bcrypt.hash(data.password, 10);
    const generateActivationLink = uuid.v4();
    const userDto = new UserDto({ ...data, password: hashPassword, generateActivationLink })
    const insertUser = await pool.query(
      'INSERT INTO users (name, surname, country, locality, dateBirth, email, phone, password, isActivated, generateActivationLink) VALUES (\$1, \$2, \$3, \$4, \$5, \$6, \$7, \$8, \$9, \$10) RETURNING *',
      Object.values(userDto)
    );
    const id = insertUser.rows[0].id;
    const token = TokenService.generateTokens({ id: id, email: userDto.email });

    const saveToken = TokenService.saveToken(id, token.refreshToken);
    // MailService.sendMail(data.email, `${process.env.EMAIL_API}/api/auth/activate/` + generateActivationLink);
    const userInfo = new UserInfoDto({ ...insertUser.rows[0] })
    return { ...token, user: userInfo };
  }

  async login(userEmail, userPassword) {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [userEmail]);
    console.log('userEmail', userEmail);
    console.log('user', user);
    console.log('!user.rows', !user.rows);
    if (!user.rows[0]) {
      throw ApiError.BadRequest('Пользователь с таким email не найден');
    }

    const { id, email, password } = user.rows[0]
    const isPasswordValid = await bcrypt.compare(userPassword, password);

    if (!isPasswordValid) {
      throw ApiError.BadRequest('Неверный пароль');
    }

    const tokens = TokenService.generateTokens({ id: id, email: email });
    const saveToken = TokenService.saveToken(id, tokens.refreshToken);
    const userInfo = new UserInfoDto({ ...user.rows[0] })
    return { ...tokens, user: userInfo };
  }

  async logout(refreshToken) {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {

    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await TokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }

    const { rows } = await pool.query('SELECT * FROM users WHERE id = \$1', [userData.id]);
    const user = rows[0];
    const { id, email } = user;
    if (!user) {
      throw ApiError.UnauthorizedError();
    }

    // console.log('user', user)
    const userInfoDto = new UserInfoDto(user);
    const tokens = TokenService.generateTokens({ id: id, email: email });
    // console.log('tokens', tokens);
    await TokenService.saveToken(id, tokens.refreshToken);

    return { ...tokens, user: userInfoDto };
  }
}
module.exports = new UserService();