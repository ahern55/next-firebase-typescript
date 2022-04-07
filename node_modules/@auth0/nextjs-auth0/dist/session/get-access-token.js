"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var errors_1 = require("../utils/errors");
var array_1 = require("../utils/array");
var session_1 = require("../session");
/**
 * @ignore
 */
function accessTokenFactory(config, getClient, sessionCache) {
    var _this = this;
    return function (req, res, accessTokenRequest) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var session, persistedScopes, matchingScopes, client, tokenSet, newSession;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    session = sessionCache.get(req, res);
                    if (!session) {
                        throw new errors_1.AccessTokenError('invalid_session', 'The user does not have a valid session.');
                    }
                    if (!session.accessToken && !session.refreshToken) {
                        throw new errors_1.AccessTokenError('invalid_session', 'The user does not have a valid access token.');
                    }
                    if (!session.accessTokenExpiresAt) {
                        throw new errors_1.AccessTokenError('access_token_expired', 'Expiration information for the access token is not available. The user will need to sign in again.');
                    }
                    if (accessTokenRequest && accessTokenRequest.scopes) {
                        persistedScopes = session.accessTokenScope;
                        if (!persistedScopes || persistedScopes.length === 0) {
                            throw new errors_1.AccessTokenError('insufficient_scope', 'An access token with the requested scopes could not be provided. The user will need to sign in again.');
                        }
                        matchingScopes = array_1.intersect(accessTokenRequest.scopes, persistedScopes.split(' '));
                        if (!array_1.match(accessTokenRequest.scopes, tslib_1.__spread(matchingScopes))) {
                            throw new errors_1.AccessTokenError('insufficient_scope', "Could not retrieve an access token with scopes \"" + accessTokenRequest.scopes.join(' ') + "\". The user will need to sign in again.");
                        }
                    }
                    // Check if the token has expired.
                    // There is an edge case where we might have some clock skew where our code assumes the token is still valid.
                    // Adding a skew of 1 minute to compensate.
                    if (!session.refreshToken && session.accessTokenExpiresAt * 1000 - 60000 < Date.now()) {
                        throw new errors_1.AccessTokenError('access_token_expired', 'The access token expired and a refresh token is not available. The user will need to sign in again.');
                    }
                    if (!((session.refreshToken && session.accessTokenExpiresAt * 1000 - 60000 < Date.now()) ||
                        (session.refreshToken && accessTokenRequest && accessTokenRequest.refresh))) return [3 /*break*/, 5];
                    return [4 /*yield*/, getClient()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.refresh(session.refreshToken, {
                            exchangeBody: accessTokenRequest === null || accessTokenRequest === void 0 ? void 0 : accessTokenRequest.authorizationParams
                        })];
                case 2:
                    tokenSet = _a.sent();
                    newSession = session_1.fromTokenSet(tokenSet, config);
                    Object.assign(session, tslib_1.__assign(tslib_1.__assign({}, newSession), { refreshToken: newSession.refreshToken || session.refreshToken, user: tslib_1.__assign(tslib_1.__assign({}, session.user), newSession.user) }));
                    if (!(accessTokenRequest === null || accessTokenRequest === void 0 ? void 0 : accessTokenRequest.afterRefresh)) return [3 /*break*/, 4];
                    return [4 /*yield*/, accessTokenRequest.afterRefresh(req, res, session)];
                case 3:
                    session = _a.sent();
                    _a.label = 4;
                case 4:
                    sessionCache.set(req, res, session);
                    // Return the new access token.
                    return [2 /*return*/, {
                            accessToken: tokenSet.access_token
                        }];
                case 5:
                    // We don't have an access token.
                    if (!session.accessToken) {
                        throw new errors_1.AccessTokenError('invalid_session', 'The user does not have a valid access token.');
                    }
                    // The access token is not expired and has sufficient scopes;
                    return [2 /*return*/, {
                            accessToken: session.accessToken
                        }];
            }
        });
    }); };
}
exports.default = accessTokenFactory;
//# sourceMappingURL=get-access-token.js.map