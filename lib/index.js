/*
 * express-response
 * https://github.com/leonanluppi/express-response
 *
 * Copyright (c) 2016 Leonan Luppi
 * Licensed under the MIT license.
 */

import express from 'express';
import fs      from 'fs';
import path    from 'path';

module.exports = (dir) => {
    return (req, res, next) => {
        if (!fs.existsSync(dir)) {
            throw new Error('You must need a valid directory for responses');
        }

        fs
            .readdirSync(dir)
            .filter((file) => {
                return file.endsWith('.js');
            })
            .forEach((file) => {
                let name = file.toString().match(/^([^.]*)/)[0];
                res[name] = require(path.join(dir, file));
                next();
            });
    }
};