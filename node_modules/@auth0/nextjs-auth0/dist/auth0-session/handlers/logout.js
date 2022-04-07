"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var url_1 = tslib_1.__importDefault(require("url"));
var url_join_1 = tslib_1.__importDefault(require("url-join"));
var debug_1 = tslib_1.__importDefault(require("../utils/debug"));
var errors_1 = require("../../utils/errors");
var debug = debug_1.default('logout');
function logoutHandlerFactory(config, getClient, sessionCache) {
    var _this = this;
    return function (req, res, options) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var returnURL, idToken, client;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        returnURL = options.returnTo || config.routes.postLogoutRedirect;
                        debug('logout() with return url: %s', returnURL);
                        if (url_1.default.parse(returnURL).host === null) {
                            returnURL = url_join_1.default(config.baseURL, returnURL);
                        }
                        if (!sessionCache.isAuthenticated(req, res)) {
                            debug('end-user already logged out, redirecting to %s', returnURL);
                            res.writeHead(302, {
                                Location: returnURL
                            });
                            res.end(errors_1.htmlSafe(returnURL));
                            return [2 /*return*/];
                        }
                        idToken = sessionCache.getIdToken(req, res);
                        sessionCache.delete(req, res);
                        if (!config.idpLogout) {
                            debug('performing a local only logout, redirecting to %s', returnURL);
                            res.writeHead(302, {
                                Location: returnURL
                            });
                            res.end(errors_1.htmlSafe(returnURL));
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, getClient()];
                    case 1:
                        client = _a.sent();
                        returnURL = client.endSessionUrl({
                            post_logout_redirect_uri: returnURL,
                            id_token_hint: idToken
                        });
                        debug('logging out of identity provider, redirecting to %s', returnURL);
                        res.writeHead(302, {
                            Location: returnURL
                        });
                        res.end(errors_1.htmlSafe(returnURL));
                        return [2 /*return*/];
                }
            });
        });
    };
}
exports.default = logoutHandlerFactory;
//# sourceMappingURL=logout.js.map