"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = exports.SessionCache = exports.HandlerError = exports.AccessTokenError = exports.useUser = exports.UserContext = exports.UserProvider = exports.handleAuth = exports.handleProfile = exports.handleCallback = exports.handleLogout = exports.handleLogin = exports.withPageAuthRequired = exports.withApiAuthRequired = exports.getAccessToken = exports.getSession = exports.initAuth0 = void 0;
var tslib_1 = require("tslib");
var auth0_session_1 = require("./auth0-session");
var handlers_1 = require("./handlers");
var session_1 = require("./session/");
Object.defineProperty(exports, "SessionCache", { enumerable: true, get: function () { return session_1.SessionCache; } });
Object.defineProperty(exports, "Session", { enumerable: true, get: function () { return session_1.Session; } });
var helpers_1 = require("./helpers");
var version_1 = tslib_1.__importDefault(require("./version"));
var config_1 = require("./config");
var instance;
function getInstance() {
    if (instance) {
        return instance;
    }
    instance = exports.initAuth0();
    return instance;
}
var initAuth0 = function (params) {
    var _a = config_1.getConfig(params), baseConfig = _a.baseConfig, nextConfig = _a.nextConfig;
    // Init base layer (with base config)
    var getClient = auth0_session_1.clientFactory(baseConfig, { name: 'nextjs-auth0', version: version_1.default });
    var transientStore = new auth0_session_1.TransientStore(baseConfig);
    var cookieStore = new auth0_session_1.CookieStore(baseConfig);
    var sessionCache = new session_1.SessionCache(baseConfig, cookieStore);
    var baseHandleLogin = auth0_session_1.loginHandler(baseConfig, getClient, transientStore);
    var baseHandleLogout = auth0_session_1.logoutHandler(baseConfig, getClient, sessionCache);
    var baseHandleCallback = auth0_session_1.callbackHandler(baseConfig, getClient, sessionCache, transientStore);
    // Init Next layer (with next config)
    var getSession = session_1.sessionFactory(sessionCache);
    var getAccessToken = session_1.accessTokenFactory(nextConfig, getClient, sessionCache);
    var withApiAuthRequired = helpers_1.withApiAuthRequiredFactory(sessionCache);
    var withPageAuthRequired = helpers_1.withPageAuthRequiredFactory(nextConfig.routes.login, getSession);
    var handleLogin = handlers_1.loginHandler(baseHandleLogin, nextConfig, baseConfig);
    var handleLogout = handlers_1.logoutHandler(baseHandleLogout);
    var handleCallback = handlers_1.callbackHandler(baseHandleCallback, nextConfig);
    var handleProfile = handlers_1.profileHandler(getClient, getAccessToken, sessionCache);
    var handleAuth = handlers_1.handlerFactory({ handleLogin: handleLogin, handleLogout: handleLogout, handleCallback: handleCallback, handleProfile: handleProfile });
    return {
        getSession: getSession,
        getAccessToken: getAccessToken,
        withApiAuthRequired: withApiAuthRequired,
        withPageAuthRequired: withPageAuthRequired,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
        handleCallback: handleCallback,
        handleProfile: handleProfile,
        handleAuth: handleAuth
    };
};
exports.initAuth0 = initAuth0;
var getSession = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getInstance()).getSession.apply(_a, tslib_1.__spread(args));
};
exports.getSession = getSession;
var getAccessToken = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getInstance()).getAccessToken.apply(_a, tslib_1.__spread(args));
};
exports.getAccessToken = getAccessToken;
var withApiAuthRequired = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getInstance()).withApiAuthRequired.apply(_a, tslib_1.__spread(args));
};
exports.withApiAuthRequired = withApiAuthRequired;
exports.withPageAuthRequired = helpers_1.withPageAuthRequiredFactory(config_1.getLoginUrl(), exports.getSession);
var handleLogin = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getInstance()).handleLogin.apply(_a, tslib_1.__spread(args));
};
exports.handleLogin = handleLogin;
var handleLogout = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getInstance()).handleLogout.apply(_a, tslib_1.__spread(args));
};
exports.handleLogout = handleLogout;
var handleCallback = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getInstance()).handleCallback.apply(_a, tslib_1.__spread(args));
};
exports.handleCallback = handleCallback;
var handleProfile = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getInstance()).handleProfile.apply(_a, tslib_1.__spread(args));
};
exports.handleProfile = handleProfile;
var handleAuth = function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getInstance()).handleAuth.apply(_a, tslib_1.__spread(args));
};
exports.handleAuth = handleAuth;
var frontend_1 = require("./frontend");
Object.defineProperty(exports, "UserProvider", { enumerable: true, get: function () { return frontend_1.UserProvider; } });
Object.defineProperty(exports, "UserContext", { enumerable: true, get: function () { return frontend_1.UserContext; } });
Object.defineProperty(exports, "useUser", { enumerable: true, get: function () { return frontend_1.useUser; } });
var errors_1 = require("./utils/errors");
Object.defineProperty(exports, "AccessTokenError", { enumerable: true, get: function () { return errors_1.AccessTokenError; } });
Object.defineProperty(exports, "HandlerError", { enumerable: true, get: function () { return errors_1.HandlerError; } });
//# sourceMappingURL=index.js.map