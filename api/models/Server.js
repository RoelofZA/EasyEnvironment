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
  tags: {
      type: [String]
  }/*,
  business_gst_number: {
    type: Number
  }*/
},{
    collection: 'server'
});

module.exports = mongoose.model('Server', Server);