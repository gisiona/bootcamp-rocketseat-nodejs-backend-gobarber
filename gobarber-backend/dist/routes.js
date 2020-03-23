"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

const routes = new (0, _express.Router)();


routes.get('/', (req, res) => {
    return res.json({ mensagem: "Hello World." })
});

//module.exports = routes;
exports. default = routes;