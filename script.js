// const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken";


const encrypt = (payload, secret) => {
  return jwt.sign(payload, secret, {expiresIn:"1h"});
  // your code here and return token
};

module.exports = encrypt;
