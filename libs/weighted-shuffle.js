//how to make this file
//npm install weighted-shuffle
//npm install -g browserify
//create a test file with the code `var weighted=require('weighted-shuffle')`
//browserify test.js --standalone weighted-shuffle -o weighted-shuffle.js
// original source https://github.com/denizdogan/weighted-shuffle

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.weightedShuffle = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.Direction = void 0;
var util_1 = require("./util");
var Direction;
(function (Direction) {
    Direction["asc"] = "asc";
    Direction["desc"] = "desc";
})(Direction = exports.Direction || (exports.Direction = {}));
function shuffle(input, direction) {
    if (direction === void 0) { direction = Direction.asc; }
    var tuples = Array.isArray(input)
        ? util_1.fromArray(input)
        : util_1.fromObject(input);
    tuples.sort(direction === Direction.desc
        ? function (a, b) { return b[1] - a[1]; }
        : function (a, b) { return a[1] - b[1]; });
    return tuples;
}
exports.default = shuffle;
exports.shuffle = shuffle;
  
},{"./util":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromObject = exports.fromArray = exports.weightFunc = void 0;
function weightFunc(weight) {
    // random(0, 1)^(1/w)
    return Math.pow(Math.random(), 1 / weight);
}
exports.weightFunc = weightFunc;
function fromArray(input) {
    // apply weightFunc to the second element of every tuple.
    return input.map(function (tuple) { return [tuple[0], weightFunc(tuple[1])]; });
}
exports.fromArray = fromArray;
function fromObject(input) {
    // apply weightFunc to each value in the object.
    var tuples = [];
    for (var value in input) {
        if (input.hasOwnProperty(value)) {
            tuples.push([value, weightFunc(input[value])]);
        }
    }
    return tuples;
}
exports.fromObject = fromObject;

},{}],3:[function(require,module,exports){
var weighted = require('weighted-shuffle')

},{"weighted-shuffle":1}]},{},[3])(3)
});
