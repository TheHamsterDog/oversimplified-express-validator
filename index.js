"use strict";
exports.__esModule = true;
var options_validator_1 = require("./options-validator");
var middleware_1 = require("./middleware");
var validator = function (options, log) {
    if (log === void 0) { log = false; }
    try {
        options_validator_1["default"](options);
    }
    catch (e) {
        throw new Error(e.message);
    }
    return function (req, res, next) {
        try {
            middleware_1["default"](options, req, res, next);
        }
        catch (e) {
            // console.log(JSON.parse(e));
            if (log === true) {
                console.log(JSON.parse(e.message));
            }
            return res.json({ errors: JSON.parse(e.message) });
        }
        next();
    };
};
module.exports = validator;
exports["default"] = validator;
