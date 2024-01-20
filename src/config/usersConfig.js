// src/config/usersConfig.js
const USER_ROLES = {
    ADMIN: 'Admin',
    EDITOR: 'Editor',
    VIEWER: 'Viewer',
  };
  
  const users = [
    { username: 'admin', password: 'admin', role: USER_ROLES.ADMIN },
    { username: 'editor', password: 'editor', role: USER_ROLES.EDITOR },
    { username: 'viewer', password: 'viewer', role: USER_ROLES.VIEWER },
  ];
  
  module.exports = { users, USER_ROLES };
  