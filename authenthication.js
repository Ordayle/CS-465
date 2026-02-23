const User = require("../models/user");
const jwt = require("jsonwebtoken");

function generateToken(user) {
  return jwt.sign(
    { sub: user._id.toString(), email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
}

async function login(req, res) {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await user.validatePassword(password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = { login };
