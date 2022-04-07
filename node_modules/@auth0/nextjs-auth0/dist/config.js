"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.getLoginUrl = void 0;
var tslib_1 = require("tslib");
var auth0_session_1 = require("./auth0-session");
/**
 * @ignore
 */
var FALSEY = ['n', 'no', 'false', '0', 'off'];
/**
 * @ignore
 */
var bool = function (param, defaultValue) {
    if (param === undefined || param === '')
        return defaultValue;
    if (param && typeof param === 'string')
        return !FALSEY.includes(param.toLowerCase().trim());
    return !!param;
};
/**
 * @ignore
 */
var num = function (param) { return (param === undefined || param === '' ? undefined : +param); };
/**
 * @ignore
 */
var getLoginUrl = function () {
    return process.env.NEXT_PUBLIC_AUTH0_LOGIN || '/api/auth/login';
};
exports.getLoginUrl = getLoginUrl;
/**
 * @ignore
 */
var getConfig = function (params) {
    var _a, _b, _c, _d;
    if (params === void 0) { params = {}; }
    // Don't use destructuring here so that the `DefinePlugin` can replace any env vars specified in `next.config.js`
    var AUTH0_SECRET = process.env.AUTH0_SECRET;
    var AUTH0_ISSUER_BASE_URL = process.env.AUTH0_ISSUER_BASE_URL;
    var AUTH0_BASE_URL = process.env.AUTH0_BASE_URL;
    var AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
    var AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
    var AUTH0_CLOCK_TOLERANCE = process.env.AUTH0_CLOCK_TOLERANCE;
    var AUTH0_HTTP_TIMEOUT = process.env.AUTH0_HTTP_TIMEOUT;
    var AUTH0_ENABLE_TELEMETRY = process.env.AUTH0_ENABLE_TELEMETRY;
    var AUTH0_IDP_LOGOUT = process.env.AUTH0_IDP_LOGOUT;
    var AUTH0_ID_TOKEN_SIGNING_ALG = process.env.AUTH0_ID_TOKEN_SIGNING_ALG;
    var AUTH0_LEGACY_SAME_SITE_COOKIE = process.env.AUTH0_LEGACY_SAME_SITE_COOKIE;
    var AUTH0_CALLBACK = process.env.AUTH0_CALLBACK;
    var AUTH0_POST_LOGOUT_REDIRECT = process.env.AUTH0_POST_LOGOUT_REDIRECT;
    var AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
    var AUTH0_SCOPE = process.env.AUTH0_SCOPE;
    var AUTH0_ORGANIZATION = process.env.AUTH0_ORGANIZATION;
    var AUTH0_SESSION_NAME = process.env.AUTH0_SESSION_NAME;
    var AUTH0_SESSION_ROLLING = process.env.AUTH0_SESSION_ROLLING;
    var AUTH0_SESSION_ROLLING_DURATION = process.env.AUTH0_SESSION_ROLLING_DURATION;
    var AUTH0_SESSION_ABSOLUTE_DURATION = process.env.AUTH0_SESSION_ABSOLUTE_DURATION;
    var AUTH0_COOKIE_DOMAIN = process.env.AUTH0_COOKIE_DOMAIN;
    var AUTH0_COOKIE_PATH = process.env.AUTH0_COOKIE_PATH;
    var AUTH0_COOKIE_TRANSIENT = process.env.AUTH0_COOKIE_TRANSIENT;
    var AUTH0_COOKIE_HTTP_ONLY = process.env.AUTH0_COOKIE_HTTP_ONLY;
    var AUTH0_COOKIE_SECURE = process.env.AUTH0_COOKIE_SECURE;
    var AUTH0_COOKIE_SAME_SITE = process.env.AUTH0_COOKIE_SAME_SITE;
    var baseURL = AUTH0_BASE_URL && !/^https?:\/\//.test(AUTH0_BASE_URL) ? "https://" + AUTH0_BASE_URL : AUTH0_BASE_URL;
    var organization = params.organization, baseParams = tslib_1.__rest(params, ["organization"]);
    var baseConfig = auth0_session_1.getConfig(tslib_1.__assign(tslib_1.__assign({ secret: AUTH0_SECRET, issuerBaseURL: AUTH0_ISSUER_BASE_URL, baseURL: baseURL, clientID: AUTH0_CLIENT_ID, clientSecret: AUTH0_CLIENT_SECRET, clockTolerance: num(AUTH0_CLOCK_TOLERANCE), httpTimeout: num(AUTH0_HTTP_TIMEOUT), enableTelemetry: bool(AUTH0_ENABLE_TELEMETRY), idpLogout: bool(AUTH0_IDP_LOGOUT, true), auth0Logout: bool(AUTH0_IDP_LOGOUT, true), idTokenSigningAlg: AUTH0_ID_TOKEN_SIGNING_ALG, legacySameSiteCookie: bool(AUTH0_LEGACY_SAME_SITE_COOKIE) }, baseParams), { authorizationParams: tslib_1.__assign({ response_type: 'code', audience: AUTH0_AUDIENCE, scope: AUTH0_SCOPE }, baseParams.authorizationParams), session: tslib_1.__assign(tslib_1.__assign({ name: AUTH0_SESSION_NAME, rolling: bool(AUTH0_SESSION_ROLLING), rollingDuration: num(AUTH0_SESSION_ROLLING_DURATION), absoluteDuration: AUTH0_SESSION_ABSOLUTE_DURATION && isNaN(Number(AUTH0_SESSION_ABSOLUTE_DURATION))
                ? bool(AUTH0_SESSION_ABSOLUTE_DURATION)
                : num(AUTH0_SESSION_ABSOLUTE_DURATION) }, baseParams.session), { cookie: tslib_1.__assign({ domain: AUTH0_COOKIE_DOMAIN, path: AUTH0_COOKIE_PATH || '/', transient: bool(AUTH0_COOKIE_TRANSIENT), httpOnly: bool(AUTH0_COOKIE_HTTP_ONLY), secure: bool(AUTH0_COOKIE_SECURE), sameSite: AUTH0_COOKIE_SAME_SITE }, (_a = baseParams.session) === null || _a === void 0 ? void 0 : _a.cookie) }), routes: {
            callback: ((_b = baseParams.routes) === null || _b === void 0 ? void 0 : _b.callback) || AUTH0_CALLBACK || '/api/auth/callback',
            postLogoutRedirect: ((_c = baseParams.routes) === null || _c === void 0 ? void 0 : _c.postLogoutRedirect) || AUTH0_POST_LOGOUT_REDIRECT
        } }));
    var nextConfig = {
        routes: tslib_1.__assign(tslib_1.__assign({}, baseConfig.routes), { login: ((_d = baseParams.routes) === null || _d === void 0 ? void 0 : _d.login) || exports.getLoginUrl() }),
        identityClaimFilter: baseConfig.identityClaimFilter,
        organization: organization || AUTH0_ORGANIZATION
    };
    return { baseConfig: baseConfig, nextConfig: nextConfig };
};
exports.getConfig = getConfig;
//# sourceMappingURL=config.js.map