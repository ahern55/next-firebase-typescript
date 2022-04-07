"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerError = exports.htmlSafe = exports.AccessTokenError = void 0;
var tslib_1 = require("tslib");
/**
 * The error thrown by {@link GetAccessToken}
 *
 * @category Server
 */
var AccessTokenError = /** @class */ (function (_super) {
    tslib_1.__extends(AccessTokenError, _super);
    /* istanbul ignore next */
    function AccessTokenError(code, message) {
        var _this = _super.call(this, message) || this;
        // Saving class name in the property of our custom error as a shortcut.
        _this.name = _this.constructor.name;
        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(_this, _this.constructor);
        // Machine readable code.
        _this.code = code;
        Object.setPrototypeOf(_this, AccessTokenError.prototype);
        return _this;
    }
    return AccessTokenError;
}(Error));
exports.AccessTokenError = AccessTokenError;
// eslint-disable-next-line max-len
// Basic escaping for putting untrusted data directly into the HTML body, per: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#rule-1-html-encode-before-inserting-untrusted-data-into-html-element-content
function htmlSafe(input) {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
exports.htmlSafe = htmlSafe;
/**
 * The error thrown by API route handlers.
 *
 * Because the error message can come from the OpenID Connect `error` query parameter we
 * do some basic escaping which makes sure the default error handler is safe from XSS.
 *
 * If you write your own error handler, you should **not** render the error message
 * without using a templating engine that will properly escape it for other HTML contexts first.
 *
 * @category Server
 */
var HandlerError = /** @class */ (function (_super) {
    tslib_1.__extends(HandlerError, _super);
    /* istanbul ignore next */
    function HandlerError(error) {
        var _this = _super.call(this, htmlSafe(error.message)) || this;
        _this.name = error.name;
        if ('code' in error) {
            _this.code = error.code;
        }
        if ('status' in error) {
            _this.status = error.status;
        }
        Object.setPrototypeOf(_this, HandlerError.prototype);
        return _this;
    }
    return HandlerError;
}(Error));
exports.HandlerError = HandlerError;
//# sourceMappingURL=errors.js.map