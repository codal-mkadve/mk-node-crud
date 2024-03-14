const jwt = require('jsonwebtoken');

const AuthController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log('email,password',email,password);
    // Admin credentials
    const adminEmail = "mihir@admin.com";
    const adminPassword = "123456";

    if (email === adminEmail && password === adminPassword) {
      // Generate a token
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '24h' });

      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(401).send("Invalid email or password");
    }
  }
};

module.exports = AuthController;
