require("dotenv").config();
const jwt = require("jsonwebtoken");

const { NODE_ENV, JWT_SECRET } = process.env;

const handleAuthError = (next) => {
  const err = new Error("Autorização necessária");
  err.statusCode = 403;
  next(err);
};

const extractBearerToken = (header) => header.replace("Bearer ", "");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return handleAuthError(next);
  }

  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === "production" ? JWT_SECRET : "super-strong-secret"
    );
  } catch (err) {
    return handleAuthError(next);
  }

  req.user = payload;

  return next();
};
