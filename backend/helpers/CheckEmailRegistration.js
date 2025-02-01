const pool = require("../DB/db")
const APIError = require("../exeptions/apiError");

const CheckEmailRegistration = async (email) => {
  console.log('email', email)
  const result = await pool.query('SELECT * FROM users WHERE email = \$1', [email]);
  
  if (result.rows.length > 0) {
    throw APIError.BadReq("Пользователь с таким email уже зарегистрирован");
  }

  return result;

};
module.exports = CheckEmailRegistration;