"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var use_config_1 = require("./use-config");
var use_user_1 = require("./use-user");
/**
 * @ignore
 */
var defaultOnRedirecting = function () { return react_1.default.createElement(react_1.default.Fragment, null); };
/**
 * @ignore
 */
var defaultOnError = function () { return react_1.default.createElement(react_1.default.Fragment, null); };
/**
 * @ignore
 */
var withPageAuthRequired = function (Component, options) {
    if (options === void 0) { options = {}; }
    return function withPageAuthRequired(props) {
        var returnTo = options.returnTo, _a = options.onRedirecting, onRedirecting = _a === void 0 ? defaultOnRedirecting : _a, _b = options.onError, onError = _b === void 0 ? defaultOnError : _b;
        var loginUrl = use_config_1.useConfig().loginUrl;
        var _c = use_user_1.useUser(), user = _c.user, error = _c.error, isLoading = _c.isLoading;
        react_1.useEffect(function () {
            if ((user && !error) || isLoading)
                return;
            var returnToPath;
            if (!returnTo) {
                var currentLocation = window.location.toString();
                returnToPath = currentLocation.replace(new URL(currentLocation).origin, '') || '/';
            }
            else {
                returnToPath = returnTo;
            }
            window.location.assign(loginUrl + "?returnTo=" + encodeURIComponent(returnToPath));
        }, [user, error, isLoading]);
        if (error)
            return onError(error);
        if (user)
            return react_1.default.createElement(Component, tslib_1.__assign({ user: user }, props));
        return onRedirecting();
    };
};
exports.default = withPageAuthRequired;
//# sourceMappingURL=with-page-auth-required.js.map