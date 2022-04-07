"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJson = exports.fromTokenSet = void 0;
var tslib_1 = require("tslib");
/**
 * The user's session
 *
 * @category Server
 */
var Session = /** @class */ (function () {
    function Session(user) {
        this.user = user;
    }
    return Session;
}());
exports.default = Session;
/**
 * @ignore
 */
function fromTokenSet(tokenSet, config) {
    // Get the claims without any OIDC specific claim.
    var claims = tokenSet.claims();
    config.identityClaimFilter.forEach(function (claim) {
        delete claims[claim];
    });
    var id_token = tokenSet.id_token, access_token = tokenSet.access_token, scope = tokenSet.scope, expires_at = tokenSet.expires_at, refresh_token = tokenSet.refresh_token, remainder = tslib_1.__rest(tokenSet, ["id_token", "access_token", "scope", "expires_at", "refresh_token"]);
    return Object.assign(new Session(tslib_1.__assign({}, claims)), {
        idToken: id_token,
        accessToken: access_token,
        accessTokenScope: scope,
        accessTokenExpiresAt: expires_at,
        refreshToken: refresh_token
    }, remainder);
}
exports.fromTokenSet = fromTokenSet;
/**
 * @ignore
 */
function fromJson(json) {
    if (!json) {
        return null;
    }
    return Object.assign(new Session(tslib_1.__assign({}, json.user)), json);
}
exports.fromJson = fromJson;
//# sourceMappingURL=session.js.map