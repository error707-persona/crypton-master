const jwt = require("jsonwebtoken");

// Generate jwt token
const generateToken = (user) =>
  jwt.sign(
    { name: user.name, email: user.email },
    process.env.JWT_SECRET || "add your own jwt secret"
  );

// Check if user is authenticates
const isAuth = (req, res, next) => {
  const auth = req.headers.authorization; // Get authorizationn data from header

  if (auth) {
    const token = auth.slice(7, arr.length); // Extract jwt tokem from auth header data

    jwt.verify(
      token,
      process.env.JWT_SECRET || "add your own jwt secret",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token Found" });
  }
};

module.exports = { generateToken, isAuth };
