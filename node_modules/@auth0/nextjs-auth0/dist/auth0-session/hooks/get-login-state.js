"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeState = exports.encodeState = exports.getLoginState = void 0;
var tslib_1 = require("tslib");
var base64url_1 = tslib_1.__importDefault(require("base64url"));
var debug_1 = tslib_1.__importDefault(require("../utils/debug"));
var debug = debug_1.default('get-login-state');
/**
 * Generate the state value for use during login transactions. It is used to store the intended
 * return URL after the user authenticates. State is not used to carry unique PRNG values here
 * because the library utilizes either nonce or PKCE for CSRF protection.
 *
 * @param {IncomingMessage} _req
 * @param {LoginOptions} options
 *
 * @return {object}
 */
var getLoginState = function (_req, options) {
    var state = { returnTo: options.returnTo };
    debug('adding default state %O', state);
    return state;
};
exports.getLoginState = getLoginState;
/**
 * Prepare a state object to send.
 *
 * @param {object} stateObject
 *
 * @return {string}
 */
function encodeState(stateObject) {
    // this filters out nonce, code_verifier, and max_age from the state object so that the values are
    // only stored in its dedicated transient cookie
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var nonce = stateObject.nonce, code_verifier = stateObject.code_verifier, max_age = stateObject.max_age, filteredState = tslib_1.__rest(stateObject, ["nonce", "code_verifier", "max_age"]);
    return base64url_1.default.encode(JSON.stringify(filteredState));
}
exports.encodeState = encodeState;
/**
 * Decode a state value.
 *
 * @param {string} stateValue
 *
 * @return {object}
 */
function decodeState(stateValue) {
    return JSON.parse(base64url_1.default.decode(stateValue));
}
exports.decodeState = decodeState;
//# sourceMappingURL=get-login-state.js.map