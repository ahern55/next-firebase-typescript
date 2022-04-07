"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = require("../utils/assert");
var errors_1 = require("../utils/errors");
/**
 * @ignore
 */
function handleLogoutFactory(handler) {
    var _this = this;
    return function (req, res, options) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    assert_1.assertReqRes(req, res);
                    return [4 /*yield*/, handler(req, res, options)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    e_1 = _a.sent();
                    throw new errors_1.HandlerError(e_1);
                case 3: return [2 /*return*/];
            }
        });
    }); };
}
exports.default = handleLogoutFactory;
//# sourceMappingURL=logout.js.map