// src/controllers/authController.js
const express = require('express');
const authService = require('../services/authService');

const router = express.Router();

// Login endpoint to obtain JWT token
router.post('/login', authService.login);

module.exports = router;
