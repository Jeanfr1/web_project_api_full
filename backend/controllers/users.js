require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const { NODE_ENV, JWT_SECRET } = process.env;

async function getUsers(req, res, next) {
  try {
    const users = await User.find({});
    if (!users) {
      const err = new Error("Ocorreu um erro ao buscar usuários");
      err.status = 500;
      throw err;
    }
    res.send({ data: users });
  } catch (err) {
    next(err);
  }
}

async function getUserById(req, res, next) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).orFail(() => {
      const err = new Error("Usuário não encontrado");
      err.status = 404;
      throw err;
    });
    res.send({ data: user });
  } catch (err) {
    next(err);
  }
}

async function getUserInfo(req, res, next) {
  try {
    const { user } = req;
    const userData = await User.findById(user._id).orFail(() => {
      const err = new Error("Usuário não encontrado");
      err.statusCode = 404;
      throw err;
    });
    res.send({ data: userData });
  } catch (err) {
    next(err);
  }
}

async function createUser(req, res, next) {
  const { name, about, avatar, email, password } = req.body;

  if (!email || !password) {
    const err = new Error("Dados inválidos...");
    err.statusCode = 400;
    return next(err);
  }

  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      about,
      avatar,
      email,
      password: hash,
    });

    res.status(201).send({
      data: {
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
}

async function updateUserProfile(req, res, next) {
  const { name, about } = req.body;
  const userId = req.user._id;

  if (!name && !about) {
    return res.status(400).send({ error: "Dados inválidos..." });
  }

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { name, about },
      { new: true }
    ).orFail(() => {
      const err = new Error("Usuário não encontrado");
      err.status = 404;
      throw err;
    });

    res.send({ data: user });
  } catch (err) {
    next(err);
  }
}

async function updateUserAvatar(req, res, next) {
  const { avatar } = req.body;
  const userId = req.user._id;

  if (!avatar) {
    return res.status(400).send({ error: "Dados inválidos..." });
  }

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { avatar },
      { new: true }
    ).orFail(() => {
      const err = new Error("Usuário não encontrado");
      err.status = 404;
      throw err;
    });

    res.send({ data: user });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    const err = new Error("Dados inválidos...");
    err.statusCode = 400;
    return next(err);
  }

  try {
    const user = await User.findUserByCredentials(email, password);
    const token = jwt.sign(
      { _id: user._id },
      NODE_ENV === "production" ? JWT_SECRET : "super-strong-secret",
      { expiresIn: "7d" }
    );

    res.send({ token });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getUsers,
  getUserById,
  getUserInfo,
  createUser,
  updateUserProfile,
  updateUserAvatar,
  login,
};
