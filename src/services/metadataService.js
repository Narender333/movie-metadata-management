// src/services/metadataService.js
const axios = require('axios');
const redis = require('redis-modules-sdk');
const crypto = require('crypto');
const helperFunctions = require('../utils/helperFunctions');

const client = redis.createClient();

const ingestMetadata = async () => {
  // Fetch data from the provided URLs
  const partner1Data = await fetchData('https://run.mocky.io/v3/85f33053-b7d2-4d49-8e94-694f8d335a4f');
  const partner2Data = await fetchData('https://run.mocky.io/v3/48314576-ff23-405f-a8fa-d6643fa7d06e');

  const consolidatedData = [...partner1Data, ...partner2Data];

  // Your consolidation logic here
  consolidatedData.forEach((entry) => {
    const titleHash = helperFunctions.generateTitleHash(entry.title);

    const existingEntry = client.json_get(titleHash, '.');

    if (existingEntry) {
      const mergedEntry = { ...existingEntry, ...entry };
      client.json_set(titleHash, '.', JSON.stringify(mergedEntry));
    } else {
      client.json_set(titleHash, '.', JSON.stringify(entry));
    }
  });

  return 'Metadata ingested successfully.';
};

const fetchMetadata = async (req, res) => {
  const title = req.params.title;
  const titleHash = helperFunctions.generateTitleHash(title);
  const metadata = client.json_get(titleHash, '.');

  if (metadata) {
    const allowedFields = req.user.access_control[req.user.role];

    const filteredMetadata = helperFunctions.filterMetadataFields(metadata, allowedFields);

    res.status(200).json(filteredMetadata);
  } else {
    res.status(404).json({ error: 'Metadata not found.' });
  }
};

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.metadata;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    throw error;
  }
};

module.exports = {
  ingestMetadata,
  fetchMetadata,
};
