// Server.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Server
let Server = new Schema({
  server_name: {
    type: String
  },
  environment: {
    type: String
  },
  ip_address: {
    type: String
  },
  os: {
    type: String
  },
  server_type: {
    type: String
  },
  tags: {
      type: [String]
  }
},{
    collection: 'server'
});

module.exports = mongoose.model('Server', Server);