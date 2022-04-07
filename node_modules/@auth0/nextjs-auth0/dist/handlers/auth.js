"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * @ignore
 */
var wrapErrorHandling = function (fn) { return function (req, res) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fn(req, res)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(error_1.status || 500).end(error_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
/**
 * @ignore
 */
function handlerFactory(_a) {
    var _this = this;
    var handleLogin = _a.handleLogin, handleLogout = _a.handleLogout, handleCallback = _a.handleCallback, handleProfile = _a.handleProfile;
    return function (userHandlers) {
        if (userHandlers === void 0) { userHandlers = {}; }
        var _a = tslib_1.__assign({ login: wrapErrorHandling(handleLogin), logout: wrapErrorHandling(handleLogout), callback: wrapErrorHandling(handleCallback), profile: wrapErrorHandling(handleProfile) }, userHandlers), login = _a.login, logout = _a.logout, callback = _a.callback, profile = _a.profile;
        return function (req, res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var route;
            return tslib_1.__generator(this, function (_a) {
                route = req.query.auth0;
                route = Array.isArray(route) ? route[0] : route;
                switch (route) {
                    case 'login':
                        return [2 /*return*/, login(req, res)];
                    case 'logout':
                        return [2 /*return*/, logout(req, res)];
                    case 'callback':
                        return [2 /*return*/, callback(req, res)];
                    case 'me':
                        return [2 /*return*/, profile(req, res)];
                    default:
                        res.status(404).end();
                }
                return [2 /*return*/];
            });
        }); };
    };
}
exports.default = handlerFactory;
//# sourceMappingURL=auth.js.map