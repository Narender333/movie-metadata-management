// src/config/authorizationConfig.js
// Configuration for authorization, e.g., access control rules
const authorizationConfig = {
    'Sample Movie': {
      Admin: ['title', 'release_date', 'description', 'genres', 'cast', 'crew'],
      Editor: ['title', 'release_date', 'description', 'genres'],
      Viewer: ['title', 'release_date', 'description'],
    },
    // Add more titles and access control rules as needed
  };
  
  module.exports = authorizationConfig;
  