"use strict";
exports.__esModule = true;
var optionsValidator = function (options) {
    try {
        if (!Array.isArray(options)) {
            throw new Error("The parameters are supposed to be an array, in the form, like [{name:'password', minLength(8), maxLength(1000)'}]");
        }
    }
    catch (e) {
        console.log("An Error Occurred " + e.message);
        throw new Error(e.message);
    }
};
exports["default"] = optionsValidator;
