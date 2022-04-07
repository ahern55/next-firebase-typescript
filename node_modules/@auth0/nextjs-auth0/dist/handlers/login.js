"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var url_helpers_1 = tslib_1.__importDefault(require("../utils/url-helpers"));
var assert_1 = require("../utils/assert");
var errors_1 = require("../utils/errors");
/**
 * @ignore
 */
function handleLoginFactory(handler, nextConfig, baseConfig) {
    var _this = this;
    return function (req, res, options) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var dangerousReturnTo, safeBaseUrl, returnTo, e_1;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        assert_1.assertReqRes(req, res);
                        if (req.query.returnTo) {
                            dangerousReturnTo = Array.isArray(req.query.returnTo) ? req.query.returnTo[0] : req.query.returnTo;
                            safeBaseUrl = new URL(((_a = options.authorizationParams) === null || _a === void 0 ? void 0 : _a.redirect_uri) || baseConfig.baseURL);
                            returnTo = url_helpers_1.default(dangerousReturnTo, safeBaseUrl);
                            options = tslib_1.__assign(tslib_1.__assign({}, options), { returnTo: returnTo });
                        }
                        if (nextConfig.organization) {
                            options = tslib_1.__assign(tslib_1.__assign({}, options), { authorizationParams: tslib_1.__assign({ organization: nextConfig.organization }, options.authorizationParams) });
                        }
                        return [4 /*yield*/, handler(req, res, options)];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2:
                        e_1 = _b.sent();
                        throw new errors_1.HandlerError(e_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
}
exports.default = handleLoginFactory;
//# sourceMappingURL=login.js.map