import { GetLoginState } from '../config';
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
export declare const getLoginState: GetLoginState;
/**
 * Prepare a state object to send.
 *
 * @param {object} stateObject
 *
 * @return {string}
 */
export declare function encodeState(stateObject: {
    [key: string]: any;
}): string;
/**
 * Decode a state value.
 *
 * @param {string} stateValue
 *
 * @return {object}
 */
export declare function decodeState(stateValue: string): {
    [key: string]: any;
};
//# sourceMappingURL=get-login-state.d.ts.map