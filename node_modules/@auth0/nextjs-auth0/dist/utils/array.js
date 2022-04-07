"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = exports.intersect = void 0;
var tslib_1 = require("tslib");
function intersect(a, b) {
    var set1 = new Set(a);
    var set2 = new Set(b);
    return new Set(tslib_1.__spread(set1).filter(function (x) { return set2.has(x); }));
}
exports.intersect = intersect;
function match(arr1, arr2) {
    var set1 = new Set(arr1);
    var set2 = new Set(arr2);
    if (set1.size !== set2.size) {
        return false;
    }
    for (var i = 0; i < arr1.length; i += 1) {
        var item = arr1[i];
        if (!set2.has(item)) {
            return false;
        }
    }
    return true;
}
exports.match = match;
//# sourceMappingURL=array.js.map