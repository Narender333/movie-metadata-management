// src/middleware/authorizationMiddleware.js
const authorizationConfig = require('../config/authorizationConfig');
const { USER_ROLES } = require('../config/usersConfig');

const authorizeIngest = (req, res, next) => {
  const userRole = req.user.role;

  // Add logic to authorize ingestion based on user role
  if (userRole === USER_ROLES.ADMIN) {
    // Admins can ingest metadata
    next();
  } else {
    res.status(403).json({ error: 'Forbidden: User does not have permission to ingest metadata.' });
  }
};

const authorizeFetch = (req, res, next) => {
  const userRole = req.user.role;
  const title = req.params.title;

  // Add logic to authorize fetching based on user role and access control
  const accessControl = authorizationConfig[title]; // Assuming title is used as a key in authorizationConfig

  if (accessControl && accessControl[userRole]) {
    // User has access to the specified title
    next();
  } else {
    res.status(403).json({ error: 'Forbidden: User does not have permission to fetch metadata for this title.' });
  }
};

module.exports = {
  authorizeIngest,
  authorizeFetch,
};
