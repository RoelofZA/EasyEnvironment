// server.route.js

const express = require('express');
const app = express();
const serverRoutes = express.Router();

// Require Server model in our routes module
let Server = require('../models/Server');

// Defined store route
serverRoutes.route('/add').post(function (req, res) {
  let server = new Server(req.body);
  console.log(server);
  server.save()
    .then(server => {
      res.status(200).json({'server': 'server in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
serverRoutes.route('/').get(function (req, res) {
    Server.find(function (err, servers){
    if(err){
      console.log(err);
    }
    else {
      res.json(servers);
    }
  });
});

// Defined edit route
serverRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Server.findById(id, function (err, server){
    console.log(server);
      res.json(server);
  });
});

//  Defined update route
serverRoutes.route('/update/:id').post(function (req, res) {
    Server.findById(req.params.id, function(err, server) {
    if (!server)
      return next(new Error('Could not load Document'));
    else {
        server.server_name = req.body.server_name;
        server.environment = req.body.environment;
        server.ip_address = req.body.ip_address;
        server.os = req.body.os;
        server.server_type = req.body.server_type;
        server.tags = req.body.tags;

        server.save().then(servers => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
serverRoutes.route('/delete/:id').delete(function (req, res) {
    Server.findByIdAndRemove({_id: req.params.id}, function(err, server){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = serverRoutes;