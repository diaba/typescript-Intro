"use strict";
exports.__esModule = true;
exports.Addition = exports.Multiplication = void 0;
var Multiplication = /** @class */ (function () {
    function Multiplication() {
    }
    Multiplication.prototype.timesTwo = function (n) {
        return n * 2;
    };
    return Multiplication;
}());
exports.Multiplication = Multiplication;
var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.add = function (x, y) {
        return x + y;
    };
    return Addition;
}());
exports.Addition = Addition;
