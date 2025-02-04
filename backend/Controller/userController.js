const UserService = require('../Services/userService')
const cookieSettings = require('../helpers/cookieSettings')

class UserController {
  async register(req, res, next) {
    try {
      console.log('req', req.body)
      const user = await UserService.registration(req.body);
      res.cookie("refreshToken", user.refreshToken, cookieSettings);
      console.log('user', user)
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, currentPassword } = req.body;
      console.log(email, currentPassword)
      const userData = await UserService.login(email, currentPassword);
      res.cookie('refreshToken', userData.refreshToken, cookieSettings);

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await UserService.logout(refreshToken);
      res.clearCookie('refreshToken');

      return res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await UserService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, cookieSettings);

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }
  async activate(req, res, next) {
    console.log('activate');
  }
}

module.exports = new UserController();