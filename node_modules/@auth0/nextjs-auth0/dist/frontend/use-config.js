"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfig = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Config = react_1.createContext({});
var useConfig = function () { return react_1.useContext(Config); };
exports.useConfig = useConfig;
exports.default = (function (_a) {
    var children = _a.children, _b = _a.loginUrl, loginUrl = _b === void 0 ? process.env.NEXT_PUBLIC_AUTH0_LOGIN || '/api/auth/login' : _b;
    return react_1.default.createElement(Config.Provider, { value: { loginUrl: loginUrl } }, children);
});
//# sourceMappingURL=use-config.js.map