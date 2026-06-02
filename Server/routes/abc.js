const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {

  try {

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

    res.status(500).json({
      message: "Server Error",
    });

  }

});

module.exports = router;