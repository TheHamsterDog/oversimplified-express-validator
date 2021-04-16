"use strict";
exports.__esModule = true;
var middleware = function (options, req, res, next) {
    var faultyOptions = [];
    options.forEach(function (option) {
        var i = req.body[option.name];
        if (i) {
            if (typeof i !== 'string') {
                i = i.toString();
            }
            if (option.minLength) {
                if (i.length < option.minLength) {
                    faultyOptions.push({ message: "Length  of " + option.name + " is less than the minimum length" });
                }
            }
            if (option.maxLength) {
                if (i.length > option.maxLength) {
                    console.log(option.maxLength);
                    console.log(i.length);
                    faultyOptions.push({ message: "Length of " + option.name + " is more than the maximum length" });
                }
            }
            if (option.email) {
                if (option.email === true) {
                    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(i)) {
                    }
                    else {
                        faultyOptions.push({ message: option.name + " is not a valid email" });
                    }
                }
            }
            if (option.equate) {
                if (option.equate.toString() !== i) {
                    faultyOptions.push({ message: option.name + " does not equate to the value " + option.equate });
                }
            }
            if (option.includes) {
                option.includes.forEach(function (o) {
                    if (!i.includes(o)) {
                        faultyOptions.push({ message: option.name + " does not include the value " + o });
                    }
                });
            }
        }
        else {
            faultyOptions.push({ message: option.name + " doesn't exist" });
        }
    });
    if (faultyOptions.length > 0) {
        throw new Error(JSON.stringify(faultyOptions));
    }
    next();
};
exports["default"] = middleware;
