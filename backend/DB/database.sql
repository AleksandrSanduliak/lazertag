create TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  surname VARCHAR(255),
  country VARCHAR(255),
  locality VARCHAR(255),
  dateBirth DATE,
  email VARCHAR(255),
  phone VARCHAR(25),
  password VARCHAR(255),
  isActivated BOOLEAN DEFAULT FALSE,
  generateActivationLink VARCHAR(50)
);

create TABLE tokens(
  id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES users(id),
  refreshToken VARCHAR(1500)
);