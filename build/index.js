'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (dir) {
    return function (req, res, next) {
        if (!_fs2.default.existsSync(dir)) {
            throw new Error('You must need a valid directory for responses');
        }

        _fs2.default.readdirSync(dir).filter(function (file) {
            return file.endsWith('.js');
        }).forEach(function (file) {
            var name = file.toString().match(/^([^.]*)/)[0];
            res[name] = require(_path2.default.join(dir, file));
            next();
        });
    };
}; /*
    * express-response
    * https://github.com/leonanluppi/express-response
    *
    * Copyright (c) 2016 Leonan Luppi
    * Licensed under the MIT license.
    */