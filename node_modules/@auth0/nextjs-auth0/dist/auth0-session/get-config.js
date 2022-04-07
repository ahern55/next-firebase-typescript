"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
var tslib_1 = require("tslib");
var joi_1 = tslib_1.__importDefault(require("joi"));
var get_login_state_1 = require("./hooks/get-login-state");
var isHttps = /^https:/i;
var paramsSchema = joi_1.default.object({
    secret: joi_1.default.alternatives([
        joi_1.default.string().min(8),
        joi_1.default.binary().min(8),
        joi_1.default.array().items(joi_1.default.string().min(8), joi_1.default.binary().min(8))
    ]).required(),
    session: joi_1.default.object({
        rolling: joi_1.default.boolean().optional().default(true),
        rollingDuration: joi_1.default.when(joi_1.default.ref('rolling'), {
            is: true,
            then: joi_1.default.number().integer().messages({
                'number.base': '"session.rollingDuration" must be provided an integer value when "session.rolling" is true'
            }),
            otherwise: joi_1.default.boolean().valid(false).messages({
                'any.only': '"session.rollingDuration" must be false when "session.rolling" is disabled'
            })
        })
            .optional()
            .default(function (parent) { return (parent.rolling ? 24 * 60 * 60 : false); }),
        absoluteDuration: joi_1.default.when(joi_1.default.ref('rolling'), {
            is: false,
            then: joi_1.default.number().integer().messages({
                'number.base': '"session.absoluteDuration" must be provided an integer value when "session.rolling" is false'
            }),
            otherwise: joi_1.default.alternatives([joi_1.default.number().integer(), joi_1.default.boolean().valid(false)])
        })
            .optional()
            .default(7 * 24 * 60 * 60),
        name: joi_1.default.string().token().optional().default('appSession'),
        cookie: joi_1.default.object({
            domain: joi_1.default.string().optional(),
            transient: joi_1.default.boolean().optional().default(false),
            httpOnly: joi_1.default.boolean().optional().default(true),
            sameSite: joi_1.default.string().valid('lax', 'strict', 'none').optional().default('lax'),
            secure: joi_1.default.when(joi_1.default.ref('/baseURL'), {
                is: joi_1.default.string().pattern(isHttps),
                then: joi_1.default.boolean()
                    .default(true)
                    .custom(function (value, _a) {
                    var warn = _a.warn;
                    if (!value)
                        warn('insecure.cookie');
                    return value;
                })
                    .messages({
                    'insecure.cookie': "Setting your cookie to insecure when over https is not recommended, I hope you know what you're doing."
                }),
                otherwise: joi_1.default.boolean().valid(false).default(false).messages({
                    'any.only': 'Cookies set with the `Secure` property wont be attached to http requests'
                })
            }),
            path: joi_1.default.string().uri({ relativeOnly: true }).optional()
        })
            .default()
            .unknown(false)
    })
        .default()
        .unknown(false),
    auth0Logout: joi_1.default.boolean().optional().default(false),
    authorizationParams: joi_1.default.object({
        response_type: joi_1.default.string().optional().valid('id_token', 'code id_token', 'code').default('id_token'),
        scope: joi_1.default.string()
            .optional()
            .pattern(/\bopenid\b/, 'contains openid')
            .default('openid profile email'),
        response_mode: joi_1.default.string()
            .optional()
            .when('response_type', {
            is: 'code',
            then: joi_1.default.valid('query', 'form_post'),
            otherwise: joi_1.default.valid('form_post').default('form_post')
        })
    })
        .optional()
        .unknown(true)
        .default(),
    baseURL: joi_1.default.string()
        .uri()
        .required()
        .when(joi_1.default.ref('authorizationParams.response_mode'), {
        is: 'form_post',
        then: joi_1.default.string()
            .pattern(isHttps)
            .rule({
            warn: true,
            message: "Using 'form_post' for response_mode may cause issues for you logging in over http, " +
                'see https://github.com/auth0/express-openid-connect/blob/master/FAQ.md'
        })
    }),
    clientID: joi_1.default.string().required(),
    clientSecret: joi_1.default.string()
        .when(joi_1.default.ref('authorizationParams.response_type', {
        adjust: function (value) { return value && value.includes('code'); }
    }), {
        is: true,
        then: joi_1.default.string().required().messages({
            'any.required': '"clientSecret" is required for a response_type that includes code'
        })
    })
        .when(joi_1.default.ref('idTokenSigningAlg', {
        adjust: function (value) { return value && value.startsWith('HS'); }
    }), {
        is: true,
        then: joi_1.default.string().required().messages({
            'any.required': '"clientSecret" is required for ID tokens with HMAC based algorithms'
        })
    }),
    clockTolerance: joi_1.default.number().optional().default(60),
    httpTimeout: joi_1.default.number().optional().default(5000),
    enableTelemetry: joi_1.default.boolean().optional().default(true),
    getLoginState: joi_1.default.function()
        .optional()
        .default(function () { return get_login_state_1.getLoginState; }),
    identityClaimFilter: joi_1.default.array()
        .optional()
        .default(['aud', 'iss', 'iat', 'exp', 'nbf', 'nonce', 'azp', 'auth_time', 's_hash', 'at_hash', 'c_hash']),
    idpLogout: joi_1.default.boolean()
        .optional()
        .default(function (parent) { return parent.auth0Logout || false; }),
    idTokenSigningAlg: joi_1.default.string().insensitive().not('none').optional().default('RS256'),
    issuerBaseURL: joi_1.default.string().uri().required(),
    legacySameSiteCookie: joi_1.default.boolean().optional().default(true),
    routes: joi_1.default.object({
        callback: joi_1.default.string().uri({ relativeOnly: true }).required(),
        postLogoutRedirect: joi_1.default.string().uri({ allowRelative: true }).default('')
    })
        .default()
        .unknown(false),
    clientAuthMethod: joi_1.default.string()
        .valid('client_secret_basic', 'client_secret_post', 'none')
        .optional()
        .default(function (parent) {
        return parent.authorizationParams.response_type === 'id_token' ? 'none' : 'client_secret_basic';
    })
});
var get = function (params) {
    if (params === void 0) { params = {}; }
    var _a = paramsSchema.validate(params), value = _a.value, error = _a.error, warning = _a.warning;
    if (error) {
        throw new TypeError(error.details[0].message);
    }
    if (warning) {
        console.warn(warning.message);
    }
    return value;
};
exports.get = get;
//# sourceMappingURL=get-config.js.map