// src/controllers/metadataController.js
const express = require('express');
const metadataService = require('../services/metadataService');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');
const authorizationMiddleware = require('../middleware/authorizationMiddleware');

const router = express.Router();

// Consolidate and ingest metadata from multiple sources
router.post('/ingest', authenticationMiddleware.authenticateUser, authorizationMiddleware.authorizeIngest, async (req, res) => {
  try {
    const message = await metadataService.ingestMetadata();
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch metadata with filtered fields based on user role and access control
router.get('/metadata/:title', authenticationMiddleware.authenticateUser, authorizationMiddleware.authorizeFetch, metadataService.fetchMetadata);

module.exports = router;
