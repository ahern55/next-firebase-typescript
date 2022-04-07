/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { ClientFactory } from '../auth0-session';
import { Session, SessionCache } from '../session';
import { AuthorizationParameters, NextConfig } from '../config';
export declare type AfterRefresh = (req: NextApiRequest, res: NextApiResponse, session: Session) => Promise<Session> | Session;
/**
 * Custom options to get an Access Token.
 *
 * @category Server
 */
export interface AccessTokenRequest {
    /**
     * A list of desired scopes for your Access Token.
     */
    scopes?: string[];
    /**
     * If set to `true`, a new Access Token will be requested with the Refresh Token grant, regardless of whether
     * the Access Token has expired or not.
     */
    refresh?: boolean;
    /**
     * When the Access Token Request refreshes the tokens using the Refresh Grant the Session is updated with new tokens.
     * Use this to modify the session after it is refreshed.
     * Usually used to keep updates in sync with the {@Link AfterCallback} hook.
     * See also the {@Link AfterRefetch} hook
     *
     * ### Modify the session after refresh
     *
     * ```js
     * // pages/api/my-handler.js
     * import { getAccessToken } from '@auth0/nextjs-auth0';
     *
     * const afterRefresh = (req, res, session) => {
     *   session.user.customProperty = 'foo';
     *   delete session.idToken;
     *   return session;
     * };
     *
     * export default async function MyHandler(req, res) {
     *   const accessToken = await getAccessToken(req, res, {
     *     refresh: true,
     *     afterRefresh,
     *   });
     * };
     * ```
     */
    afterRefresh?: AfterRefresh;
    /**
     * This is useful for sending custom query parameters in the body of the refresh grant request for use in rules.
     */
    authorizationParams?: Partial<AuthorizationParameters>;
}
/**
 * Response from requesting an Access Token.
 *
 * @category Server
 */
export interface GetAccessTokenResult {
    /**
     * Access token returned from the token cache.
     */
    accessToken?: string | undefined;
}
/**
 * Get an Access Token to access an external API.
 *
 * @throws {@Link AccessTokenError}
 *
 * @category Server
 */
export declare type GetAccessToken = (req: IncomingMessage | NextApiRequest, res: ServerResponse | NextApiResponse, accessTokenRequest?: AccessTokenRequest) => Promise<GetAccessTokenResult>;
/**
 * @ignore
 */
export default function accessTokenFactory(config: NextConfig, getClient: ClientFactory, sessionCache: SessionCache): GetAccessToken;
//# sourceMappingURL=get-access-token.d.ts.map