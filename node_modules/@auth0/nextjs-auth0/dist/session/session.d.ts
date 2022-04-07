import { TokenSet } from 'openid-client';
import { Config } from '../auth0-session';
import { NextConfig } from '../config';
/**
 * Key-value store for the user's claims.
 *
 * @category Server
 */
export interface Claims {
    [key: string]: any;
}
/**
 * The user's session
 *
 * @category Server
 */
export default class Session {
    /**
     * Any of the claims from the id_token.
     */
    user: Claims;
    /**
     * The id token.
     */
    idToken?: string | undefined;
    /**
     * The access token.
     */
    accessToken?: string | undefined;
    /**
     * The access token scopes.
     */
    accessTokenScope?: string | undefined;
    /**
     * The expiration of the access token.
     */
    accessTokenExpiresAt?: number;
    /**
     * The refresh token.
     */
    refreshToken?: string | undefined;
    [key: string]: any;
    constructor(user: Claims);
}
/**
 * @ignore
 */
export declare function fromTokenSet(tokenSet: TokenSet, config: Config | NextConfig): Session;
/**
 * @ignore
 */
export declare function fromJson(json: {
    [key: string]: any;
} | undefined): Session | null;
//# sourceMappingURL=session.d.ts.map