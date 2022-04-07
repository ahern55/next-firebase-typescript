/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { JWK } from 'jose';
import { Config } from './config';
export interface StoreOptions {
    sameSite?: boolean | 'lax' | 'strict' | 'none';
    value?: string;
}
export declare const generateCookieValue: (cookie: string, value: string, key: JWK.Key) => string;
export default class TransientStore {
    private config;
    private currentKey;
    private keyStore;
    constructor(config: Config);
    /**
     * Set a cookie with a value or a generated nonce.
     *
     * @param {String} key Cookie name to use.
     * @param {IncomingMessage} _req Server Request object.
     * @param {ServerResponse} res Server Response object.
     * @param {Object} opts Options object.
     * @param {String} opts.sameSite SameSite attribute of "None," "Lax," or "Strict". Default is "None."
     * @param {String} opts.value Cookie value. Omit this key to store a generated value.
     *
     * @return {String} Cookie value that was set.
     */
    save(key: string, _req: IncomingMessage, res: ServerResponse, { sameSite, value }: StoreOptions): string;
    /**
     * Get a cookie value then delete it.
     *
     * @param {String} key Cookie name to use.
     * @param {IncomingMessage} req Express Request object.
     * @param {ServerResponse} res Express Response object.
     *
     * @return {String|undefined} Cookie value or undefined if cookie was not found.
     */
    read(key: string, req: IncomingMessage, res: ServerResponse): string | undefined;
    /**
     * Generates a nonce value.
     * @return {String}
     */
    generateNonce(): string;
    /**
     * Generates a code_verifier value.
     * @return {String}
     */
    generateCodeVerifier(): string;
    /**
     * Calculates a code_challenge value for a given codeVerifier
     * @param {String} codeVerifier Code Verifier to calculate the code_challenge value from.
     * @return {String}
     */
    calculateCodeChallenge(codeVerifier: string): string;
}
//# sourceMappingURL=transient-store.d.ts.map