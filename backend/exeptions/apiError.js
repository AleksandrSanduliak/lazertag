module.exports = class ApiError extends Error {
  status;
  errors;

  constructor(status, errors = [], message) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
  
  static(message, errors = []) {
    return new APIError(400, message, errors);
  }
  
  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }

  static UnauthError() {
    return new APIError(401, "Пользователь не авторизован");
  }
};