const jwt = require('jsonwebtoken');
const pool = require("../DB/db");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });

    return {
      accessToken,
      refreshToken
    }
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenQuery = 'SELECT * FROM tokens WHERE userId = \$1';
    const { rows } = await pool.query(tokenQuery, [userId]);

    if (rows.length > 0) { // токен существует, перезаписываем его
      const updateQuery = 'UPDATE tokens SET refreshToken = \$1 WHERE userId = \$2 RETURNING *';
      const updatedToken = await pool.query(updateQuery, [refreshToken, userId]);
      return updatedToken.rows[0];
    }

    // токена нет, создаем новый
    const insertQuery = 'INSERT INTO tokens (userId, refreshToken) VALUES (\$1, \$2) RETURNING *';
    const newToken = await pool.query(insertQuery, [userId, refreshToken]);
    return newToken.rows[0];
  }

  async removeToken(refreshToken) {
    const deleteQuery = 'DELETE FROM tokens WHERE refreshToken = \$1 RETURNING *';
    await pool.query(deleteQuery, [refreshToken]);
  }

  async findToken(refreshToken) {
    const result = await pool.query('SELECT * FROM tokens WHERE refreshToken = \$1', [refreshToken]);

    if (result.rows.length > 0) {
      return result.rows[0];
    }

    return null;
  }


}

module.exports = new TokenService();