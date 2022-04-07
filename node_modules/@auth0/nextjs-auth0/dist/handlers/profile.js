"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var session_1 = require("../session");
var assert_1 = require("../utils/assert");
var errors_1 = require("../utils/errors");
/**
 * @ignore
 */
function profileHandler(getClient, getAccessToken, sessionCache) {
    var _this = this;
    return function (req, res, options) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var session, accessToken, client, userInfo, newSession, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    assert_1.assertReqRes(req, res);
                    if (!sessionCache.isAuthenticated(req, res)) {
                        res.status(401).json({
                            error: 'not_authenticated',
                            description: 'The user does not have an active session or is not authenticated'
                        });
                        return [2 /*return*/];
                    }
                    session = sessionCache.get(req, res);
                    res.setHeader('Cache-Control', 'no-store');
                    if (!(options === null || options === void 0 ? void 0 : options.refetch)) return [3 /*break*/, 6];
                    return [4 /*yield*/, getAccessToken(req, res)];
                case 1:
                    accessToken = (_a.sent()).accessToken;
                    if (!accessToken) {
                        throw new Error('No access token available to refetch the profile');
                    }
                    return [4 /*yield*/, getClient()];
                case 2:
                    client = _a.sent();
                    return [4 /*yield*/, client.userinfo(accessToken)];
                case 3:
                    userInfo = _a.sent();
                    newSession = session_1.fromJson(tslib_1.__assign(tslib_1.__assign({}, session), { user: tslib_1.__assign(tslib_1.__assign({}, session.user), userInfo) }));
                    if (!options.afterRefetch) return [3 /*break*/, 5];
                    return [4 /*yield*/, options.afterRefetch(req, res, newSession)];
                case 4:
                    newSession = _a.sent();
                    _a.label = 5;
                case 5:
                    sessionCache.set(req, res, newSession);
                    res.json(newSession.user);
                    return [2 /*return*/];
                case 6:
                    res.json(session.user);
                    return [3 /*break*/, 8];
                case 7:
                    e_1 = _a.sent();
                    throw new errors_1.HandlerError(e_1);
                case 8: return [2 /*return*/];
            }
        });
    }); };
}
exports.default = profileHandler;
//# sourceMappingURL=profile.js.map