module.exports = class UserDto {
  name;
  surname;
  country;
  locality;
  dateBirth;
  email;
  phone;
  password;

  constructor (model) {
    this.name = model.name,
    this.surname = model.surname,
    this.country = model.country,
    this.locality = model.locality,
    this.dateBirth = model.dateBirth,
    this.email = model.email.toLowerCase(),
    this.phone = model.phone,
    this.password = model.password,
    this.isActivated = false,
    this.generateActivationLink = model.generateActivationLink
  }
}