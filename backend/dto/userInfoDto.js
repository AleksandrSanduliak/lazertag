module.exports = class UserInfoDto {
  name;
  surname;
  country;
  locality;
  dateBirth;
  email;
  phone;

  constructor (model) {
    this.name = model.name,
    this.surname = model.surname,
    this.country = model.country,
    this.locality = model.locality,
    this.dateBirth = model.dateBirth,
    this.email = model.email.toLowerCase(),
    this.phone = model.phone
  }
}