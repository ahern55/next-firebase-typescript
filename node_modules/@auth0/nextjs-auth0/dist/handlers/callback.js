"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = require("assert");
var assert_2 = require("../utils/assert");
var errors_1 = require("../utils/errors");
/**
 * @ignore
 */
var idTokenValidator = function (afterCallback, organization) { return function (req, res, session, state) {
    if (organization) {
        assert_1.strict(session.user.org_id, 'Organization Id (org_id) claim must be a string present in the ID token');
        assert_1.strict.equal(session.user.org_id, organization, "Organization Id (org_id) claim value mismatch in the ID token; " +
            ("expected \"" + organization + "\", found \"" + session.user.org_id + "\""));
    }
    if (afterCallback) {
        return afterCallback(req, res, session, state);
    }
    return session;
}; };
/**
 * @ignore
 */
function handleCallbackFactory(handler, config) {
    var _this = this;
    return function (req, res, options) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        assert_2.assertReqRes(req, res);
                        return [4 /*yield*/, handler(req, res, tslib_1.__assign(tslib_1.__assign({}, options), { afterCallback: idTokenValidator(options.afterCallback, options.organization || config.organization) }))];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        throw new errors_1.HandlerError(e_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
}
exports.default = handleCallbackFactory;
//# sourceMappingURL=callback.js.map