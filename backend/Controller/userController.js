const UserService = require('../Services/userService')
const cookieSettings = require('../helpers/cookieSettings')

class UserController {
  async register(req, res, next) {
    try {
      const user = await UserService.registration(req.body);
      res.cookie("refreshToken", user.refreshToken, cookieSettings);

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log(email, password)
      const userData = await UserService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, cookieSettings);

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await UserService.logout(refreshToken);
      res.clearCookie('refreshToken');

      return res.json(token);
    } catch (e) {
      next(e);
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await UserService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, cookieSettings);

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async activate(req, res, next) {
    console.log('activate');
  }
}

module.exports = new UserController();