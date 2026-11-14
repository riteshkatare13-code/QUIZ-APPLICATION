const jwt = require("jsonwebtoken");


const SECRET_TOKEN = process.env.SECRET_TOKEN;

const authVerify = (req, res, next) => {
  const authHeader = req.headers.authorization;


  if (!authHeader) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

  try {
    const decodedToken = jwt.verify(token, SECRET_TOKEN);
    req.user = { userId: decodedToken.id };
    return next();
  } catch (err) {
    console.error(`Error from server: ${err.message}`);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = authVerify;
