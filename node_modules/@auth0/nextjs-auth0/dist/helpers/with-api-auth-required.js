"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = require("../utils/assert");
/**
 * @ignore
 */
function withApiAuthFactory(sessionCache) {
    var _this = this;
    return function (apiRoute) { return function (req, res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var session;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    assert_1.assertReqRes(req, res);
                    session = sessionCache.get(req, res);
                    if (!session || !session.user) {
                        res.status(401).json({
                            error: 'not_authenticated',
                            description: 'The user does not have an active session or is not authenticated'
                        });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, apiRoute(req, res)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }; };
}
exports.default = withApiAuthFactory;
//# sourceMappingURL=with-api-auth-required.js.map