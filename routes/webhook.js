const express = require('express');
const router = express.Router();

// Set your custom verify token
const VERIFY_TOKEN = "12345678"; // Replace with your token

// Webhook verification route
router.get('/', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    console.log("Webhook verified successfully.");
    res.status(200).send(challenge);
  } else {
    console.log("Webhook verification failed.");
    res.status(403).send("Verification failed");
  }
});

module.exports = router;
