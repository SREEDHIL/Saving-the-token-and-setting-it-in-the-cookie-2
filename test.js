const encrypt = require("./script");

const secretKey = "Kalvium";
const payload = { userId: 123, role: "admin" };

const token = encrypt(payload,secretKey);
console.log("Generated Token:", token)