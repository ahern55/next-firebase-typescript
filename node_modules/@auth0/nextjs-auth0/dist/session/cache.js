"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var on_headers_1 = tslib_1.__importDefault(require("on-headers"));
var session_1 = require("./session");
var SessionCache = /** @class */ (function () {
    function SessionCache(config, cookieStore) {
        this.config = config;
        this.cookieStore = cookieStore;
        this.cache = new WeakMap();
    }
    SessionCache.prototype.init = function (req, res) {
        var _this = this;
        if (!this.cache.has(req)) {
            var _a = tslib_1.__read(this.cookieStore.read(req), 2), json = _a[0], iat_1 = _a[1];
            this.cache.set(req, session_1.fromJson(json));
            on_headers_1.default(res, function () { return _this.cookieStore.save(req, res, _this.cache.get(req), iat_1); });
        }
    };
    SessionCache.prototype.create = function (req, res, session) {
        var _this = this;
        this.cache.set(req, session);
        on_headers_1.default(res, function () { return _this.cookieStore.save(req, res, _this.cache.get(req)); });
    };
    SessionCache.prototype.delete = function (req, res) {
        this.init(req, res);
        this.cache.set(req, null);
    };
    SessionCache.prototype.isAuthenticated = function (req, res) {
        this.init(req, res);
        var session = this.cache.get(req);
        return !!(session === null || session === void 0 ? void 0 : session.user);
    };
    SessionCache.prototype.getIdToken = function (req, res) {
        this.init(req, res);
        var session = this.cache.get(req);
        return session === null || session === void 0 ? void 0 : session.idToken;
    };
    SessionCache.prototype.set = function (req, res, session) {
        this.init(req, res);
        this.cache.set(req, session);
    };
    SessionCache.prototype.get = function (req, res) {
        this.init(req, res);
        return this.cache.get(req);
    };
    SessionCache.prototype.fromTokenSet = function (tokenSet) {
        return session_1.fromTokenSet(tokenSet, this.config);
    };
    return SessionCache;
}());
exports.default = SessionCache;
//# sourceMappingURL=cache.js.map