const dotenv = require('dotenv');

// Load environment variables from a .env file into process.env
dotenv.config();

module.exports = {
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'vasu',
    uri: process.env.DB_URI || `mongodb://${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 27017}/${process.env.DB_NAME || 'your_database_name'}`
  },
  server: {
    port: process.env.SERVER_PORT || 3000
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret',
    expiration: process.env.JWT_EXPIRATION || '1h' // Token expiration time
  },
  // Add any other configuration settings here
};
