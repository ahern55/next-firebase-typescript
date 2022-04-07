"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = require("../utils/assert");
var frontend_1 = require("../frontend");
/**
 * @ignore
 */
function withPageAuthRequiredFactory(loginUrl, getSession) {
    var _this = this;
    return function (optsOrComponent, csrOpts) {
        if (optsOrComponent === void 0) { optsOrComponent = {}; }
        if (typeof optsOrComponent === 'function') {
            return frontend_1.withPageAuthRequired(optsOrComponent, csrOpts);
        }
        var getServerSideProps = optsOrComponent.getServerSideProps, returnTo = optsOrComponent.returnTo;
        return function (ctx) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var session, ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assertCtx(ctx);
                        session = getSession(ctx.req, ctx.res);
                        if (!(session === null || session === void 0 ? void 0 : session.user)) {
                            // 10 - redirect
                            // 9.5.4 - unstable_redirect
                            // 9.4 - res.setHeaders
                            return [2 /*return*/, {
                                    redirect: {
                                        destination: loginUrl + "?returnTo=" + encodeURIComponent(returnTo || ctx.resolvedUrl),
                                        permanent: false
                                    }
                                }];
                        }
                        ret = { props: {} };
                        if (!getServerSideProps) return [3 /*break*/, 2];
                        return [4 /*yield*/, getServerSideProps(ctx)];
                    case 1:
                        ret = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, tslib_1.__assign(tslib_1.__assign({}, ret), { props: tslib_1.__assign(tslib_1.__assign({}, ret.props), { user: session.user }) })];
                }
            });
        }); };
    };
}
exports.default = withPageAuthRequiredFactory;
//# sourceMappingURL=with-page-auth-required.js.map