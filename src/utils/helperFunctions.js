// src/utils/helperFunctions.js
const crypto = require('crypto');

const generateToken = (user) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

const generateTitleHash = (title) => {
  const titleHash = crypto.createHash('md5').update(title).digest('hex');
  return titleHash;
};

const filterMetadataFields = (metadata, allowedFields) => {
  const filteredMetadata = { title: metadata.title, release_date: metadata.release_date };

  if (allowedFields && Array.isArray(allowedFields)) {
    allowedFields.forEach(field => {
      if (metadata[field] !== undefined) {
        filteredMetadata[field] = metadata[field];
      }
    });
  }

  return filteredMetadata;
};

module.exports = {
  generateToken,
  generateTitleHash,
  filterMetadataFields,
};
