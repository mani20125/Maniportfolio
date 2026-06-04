const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Received:", req.body);

    const { name, email, message } = req.body;

    const newMessage = new Contact({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.status(200).json({
      message: "Message saved successfully",
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;