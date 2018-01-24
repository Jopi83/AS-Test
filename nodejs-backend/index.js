/*
 * Copyright 2016 Red Hat Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

var Keycloak = require('keycloak-connect');
var express = require('express');
var session = require('express-session');
var cors = require('cors');

var app = express();

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

// Create a session-store to be used by both the express-session
// middleware and the keycloak middleware.

var memoryStore = new session.MemoryStore();

app.use(session({
    secret: 'nodejsserver',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

// Provide the session store to the Keycloak so that sessions
// can be invalidated from the Keycloak console callback.
//
// Additional configuration is read from keycloak.json file
// installed from the Keycloak web console.

var keycloak = new Keycloak({
    store: memoryStore,
    scope: 'openid'
});

// Install the Keycloak middleware.
//
// Specifies that the user-accessible application URL to
// logout should be mounted at /logout
//
// Specifies that Keycloak console callbacks should target the
// root URL.  Various permutations, such as /k_logout will ultimately
// be appended to the admin URL.

app.use(keycloak.middleware({
    logout: '/logout',
    admin: '/'
}));

app.get('/login', keycloak.protect(), function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"status": "successful"}));
});

app.options('/list', [cors(), function (req, res, next) {
    next();
}]);
app.options('/list2', [cors(), function (req, res, next) {
    console.log('options');
    next();
}]);

app.get('/list', [cors(), keycloak.protect('realm:ROLE_ADMIN')], function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({"status": "successful"});
});

app.get('/list2', [cors(), keycloak.protect()], function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({status: "successful"});
});

app.get('/health.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"status": "UP"}));
});

app.get('/header', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(req.headers);
});
