"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUser = exports.UserContext = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var use_config_1 = tslib_1.__importDefault(require("./use-config"));
/**
 * @ignore
 */
var missingUserProvider = 'You forgot to wrap your app in <UserProvider>';
/**
 * @ignore
 */
exports.UserContext = react_1.createContext({
    get user() {
        throw new Error(missingUserProvider);
    },
    get error() {
        throw new Error(missingUserProvider);
    },
    get isLoading() {
        throw new Error(missingUserProvider);
    },
    checkSession: function () {
        throw new Error(missingUserProvider);
    }
});
/**
 * @ignore
 */
var useUser = function () { return react_1.useContext(exports.UserContext); };
exports.useUser = useUser;
/**
 * @ignore
 */
var userFetcher = function (url) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.ok ? response.json() : undefined];
        }
    });
}); };
exports.default = (function (_a) {
    var children = _a.children, initialUser = _a.user, _b = _a.profileUrl, profileUrl = _b === void 0 ? process.env.NEXT_PUBLIC_AUTH0_PROFILE || '/api/auth/me' : _b, loginUrl = _a.loginUrl, _c = _a.fetcher, fetcher = _c === void 0 ? userFetcher : _c;
    var _d = tslib_1.__read(react_1.useState({ user: initialUser, isLoading: !initialUser }), 2), state = _d[0], setState = _d[1];
    var checkSession = react_1.useCallback(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var user_1, _e_1, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetcher(profileUrl)];
                case 1:
                    user_1 = _a.sent();
                    setState(function (previous) { return (tslib_1.__assign(tslib_1.__assign({}, previous), { user: user_1, error: undefined })); });
                    return [3 /*break*/, 3];
                case 2:
                    _e_1 = _a.sent();
                    error_1 = new Error("The request to " + profileUrl + " failed");
                    setState(function (previous) { return (tslib_1.__assign(tslib_1.__assign({}, previous), { user: undefined, error: error_1 })); });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [profileUrl]);
    react_1.useEffect(function () {
        if (state.user)
            return;
        (function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, checkSession()];
                    case 1:
                        _a.sent();
                        setState(function (previous) { return (tslib_1.__assign(tslib_1.__assign({}, previous), { isLoading: false })); });
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [state.user]);
    var user = state.user, error = state.error, isLoading = state.isLoading;
    return (react_1.default.createElement(use_config_1.default, { loginUrl: loginUrl },
        react_1.default.createElement(exports.UserContext.Provider, { value: { user: user, error: error, isLoading: isLoading, checkSession: checkSession } }, children)));
});
//# sourceMappingURL=use-user.js.map