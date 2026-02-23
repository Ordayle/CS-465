require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./app_api/models/user");

(async () => {
  try {
    const dbURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/travlr";
    await mongoose.connect(dbURI);

    const email = "admin@travlr.com";
    const existing = await User.findOne({ email });

    if (existing) {
      console.log("Admin already exists:", email);
      process.exit(0);
    }

    const u = new User({ email, name: "Admin", passwordHash: "temp" });
    await u.setPassword("Password123!");
    await u.save();

    console.log("Created admin:", email);
    console.log("Password: Password123!");
    process.exit(0);
  } catch (e) {
    console.error("Seed error:", e);
    process.exit(1);
  }
})();
