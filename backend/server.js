const express = require('express')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const pool = require("./DB/db");
const ErrorMiddleware = require("./middleware/errorMiddleware");

const authRouter = require("./Router/authRouter");
require("dotenv").config();

const app = express()
const PORT = process.env.PORT || 3001

app.use(
  cors({
    origin: process.env.FRONT_API,
    credentials: true,
  })
);

app.use(ErrorMiddleware);
app.use(cookieParser());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("<h2>server</h2>");
});

app.use('/api/auth', authRouter)

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  } catch (err) {
    throw new Error("Ошибка запуска сервера");
  }
};

start();