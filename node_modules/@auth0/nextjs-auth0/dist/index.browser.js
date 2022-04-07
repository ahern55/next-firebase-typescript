"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAuth = exports.handleProfile = exports.handleCallback = exports.handleLogout = exports.handleLogin = exports.withApiAuthRequired = exports.getAccessToken = exports.getSession = exports.initAuth0 = exports.withPageAuthRequired = exports.useUser = exports.UserContext = exports.UserProvider = void 0;
var tslib_1 = require("tslib");
var frontend_1 = require("./frontend");
Object.defineProperty(exports, "UserProvider", { enumerable: true, get: function () { return frontend_1.UserProvider; } });
Object.defineProperty(exports, "UserContext", { enumerable: true, get: function () { return frontend_1.UserContext; } });
Object.defineProperty(exports, "useUser", { enumerable: true, get: function () { return frontend_1.useUser; } });
Object.defineProperty(exports, "withPageAuthRequired", { enumerable: true, get: function () { return frontend_1.withPageAuthRequired; } });
var serverSideOnly = function (method) { return "The " + method + " method can only be used from the server side"; };
var instance = {
    getSession: function () {
        throw new Error(serverSideOnly('getSession'));
    },
    getAccessToken: function () {
        throw new Error(serverSideOnly('getAccessToken'));
    },
    withApiAuthRequired: function () {
        throw new Error(serverSideOnly('withApiAuthRequired'));
    },
    handleLogin: function () {
        throw new Error(serverSideOnly('handleLogin'));
    },
    handleLogout: function () {
        throw new Error(serverSideOnly('handleLogout'));
    },
    handleCallback: function () {
        throw new Error(serverSideOnly('handleCallback'));
    },
    handleProfile: function () {
        throw new Error(serverSideOnly('handleProfile'));
    },
    handleAuth: function () {
        throw new Error(serverSideOnly('handleAuth'));
    },
    withPageAuthRequired: function () {
        throw new Error(serverSideOnly('withPageAuthRequired'));
    }
};
var initAuth0 = function () { return instance; };
exports.initAuth0 = initAuth0;
var getSession = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return instance.getSession.apply(instance, tslib_1.__spread(args));
};
exports.getSession = getSession;
var getAccessToken = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return instance.getAccessToken.apply(instance, tslib_1.__spread(args));
};
exports.getAccessToken = getAccessToken;
var withApiAuthRequired = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return instance.withApiAuthRequired.apply(instance, tslib_1.__spread(args));
};
exports.withApiAuthRequired = withApiAuthRequired;
var handleLogin = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return instance.handleLogin.apply(instance, tslib_1.__spread(args));
};
exports.handleLogin = handleLogin;
var handleLogout = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return instance.handleLogout.apply(instance, tslib_1.__spread(args));
};
exports.handleLogout = handleLogout;
var handleCallback = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return instance.handleCallback.apply(instance, tslib_1.__spread(args));
};
exports.handleCallback = handleCallback;
var handleProfile = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return instance.handleProfile.apply(instance, tslib_1.__spread(args));
};
exports.handleProfile = handleProfile;
var handleAuth = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return instance.handleAuth.apply(instance, tslib_1.__spread(args));
};
exports.handleAuth = handleAuth;
//# sourceMappingURL=index.browser.js.map