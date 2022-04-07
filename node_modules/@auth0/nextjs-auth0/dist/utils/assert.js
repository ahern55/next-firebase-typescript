"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertCtx = exports.assertReqRes = void 0;
var assertReqRes = function (req, res) {
    if (!req) {
        throw new Error('Request is not available');
    }
    if (!res) {
        throw new Error('Response is not available');
    }
};
exports.assertReqRes = assertReqRes;
var assertCtx = function (_a) {
    var req = _a.req, res = _a.res;
    if (!req) {
        throw new Error('Request is not available');
    }
    if (!res) {
        throw new Error('Response is not available');
    }
};
exports.assertCtx = assertCtx;
//# sourceMappingURL=assert.js.map