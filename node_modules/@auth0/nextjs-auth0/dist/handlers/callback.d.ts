import { NextApiResponse, NextApiRequest } from 'next';
import { AuthorizationParameters, HandleCallback as BaseHandleCallback } from '../auth0-session';
import { Session } from '../session';
import { NextConfig } from '../config';
/**
 * Use this function for validating additional claims on the user's ID Token or adding removing items from
 * the session after login, eg
 *
 * ### Validate additional claims
 *
 * ```js
 * // pages/api/auth/[...auth0].js
 * import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
 *
 * const afterCallback = (req, res, session, state) => {
 *   if (!session.user.isAdmin) {
 *     throw new UnauthorizedError('User is not admin');
 *   }
 *   return session;
 * };
 *
 * export default handleAuth({
 *   async callback(req, res) {
 *     try {
 *       await handleCallback(req, res, { afterCallback });
 *     } catch (error) {
 *       res.status(error.status || 500).end(error.message);
 *     }
 *   }
 * });
 * ```
 *
 * ### Modify the session after login
 *
 * ```js
 * // pages/api/auth/[...auth0].js
 * import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
 *
 * const afterCallback = (req, res, session, state) => {
 *   session.user.customProperty = 'foo';
 *   delete session.refreshToken;
 *   return session;
 * };
 *
 * export default handleAuth({
 *   async callback(req, res) {
 *     try {
 *       await handleCallback(req, res, { afterCallback });
 *     } catch (error) {
 *       res.status(error.status || 500).end(error.message);
 *     }
 *   }
 * });
 * ```
 *
 * @throws {@Link HandlerError}
 *
 * @category Server
 */
export declare type AfterCallback = (req: NextApiRequest, res: NextApiResponse, session: Session, state: {
    [key: string]: any;
}) => Promise<Session> | Session;
/**
 * Options to customize the callback handler.
 *
 * @category Server
 */
export interface CallbackOptions {
    afterCallback?: AfterCallback;
    /**
     * This is useful to specify in addition to {@Link BaseConfig.baseURL} when your app runs on multiple domains,
     * it should match {@Link LoginOptions.authorizationParams.redirect_uri}.
     */
    redirectUri?: string;
    /**
     * This is useful to specify instead of {@Link NextConfig.organization} when your app has multiple
     * organizations, it should match {@Link LoginOptions.authorizationParams}.
     */
    organization?: string;
    /**
     * This is useful for sending custom query parameters in the body of the code exchange request for use in rules.
     */
    authorizationParams?: Partial<AuthorizationParameters>;
}
/**
 * The handler for the `api/auth/callback` route.
 *
 * @throws {@Link HandlerError}
 *
 * @category Server
 */
export declare type HandleCallback = (req: NextApiRequest, res: NextApiResponse, options?: CallbackOptions) => Promise<void>;
/**
 * @ignore
 */
export default function handleCallbackFactory(handler: BaseHandleCallback, config: NextConfig): HandleCallback;
//# sourceMappingURL=callback.d.ts.map