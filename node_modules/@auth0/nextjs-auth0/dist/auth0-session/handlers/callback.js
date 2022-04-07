"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var url_join_1 = tslib_1.__importDefault(require("url-join"));
var http_errors_1 = require("http-errors");
var get_login_state_1 = require("../hooks/get-login-state");
var errors_1 = require("../../utils/errors");
function getRedirectUri(config) {
    return url_join_1.default(config.baseURL, config.routes.callback);
}
function callbackHandlerFactory(config, getClient, sessionCache, transientCookieHandler) {
    var _this = this;
    return function (req, res, options) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var client, redirectUri, expectedState, tokenSet, callbackParams, max_age, code_verifier, nonce, err_1, openidState, session;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getClient()];
                case 1:
                    client = _a.sent();
                    redirectUri = (options === null || options === void 0 ? void 0 : options.redirectUri) || getRedirectUri(config);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    callbackParams = client.callbackParams(req);
                    expectedState = transientCookieHandler.read('state', req, res);
                    max_age = transientCookieHandler.read('max_age', req, res);
                    code_verifier = transientCookieHandler.read('code_verifier', req, res);
                    nonce = transientCookieHandler.read('nonce', req, res);
                    return [4 /*yield*/, client.callback(redirectUri, callbackParams, {
                            max_age: max_age !== undefined ? +max_age : undefined,
                            code_verifier: code_verifier,
                            nonce: nonce,
                            state: expectedState
                        }, { exchangeBody: options === null || options === void 0 ? void 0 : options.authorizationParams })];
                case 3:
                    tokenSet = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    throw new http_errors_1.BadRequest(err_1.message);
                case 5:
                    openidState = get_login_state_1.decodeState(expectedState);
                    session = sessionCache.fromTokenSet(tokenSet);
                    if (!(options === null || options === void 0 ? void 0 : options.afterCallback)) return [3 /*break*/, 7];
                    return [4 /*yield*/, options.afterCallback(req, res, session, openidState)];
                case 6:
                    session = _a.sent();
                    _a.label = 7;
                case 7:
                    sessionCache.create(req, res, session);
                    res.writeHead(302, {
                        Location: openidState.returnTo || config.baseURL
                    });
                    res.end(errors_1.htmlSafe(openidState.returnTo || config.baseURL));
                    return [2 /*return*/];
            }
        });
    }); };
}
exports.default = callbackHandlerFactory;
//# sourceMappingURL=callback.js.map