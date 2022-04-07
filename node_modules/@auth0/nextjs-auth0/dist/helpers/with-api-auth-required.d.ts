import { NextApiHandler } from 'next';
import { SessionCache } from '../session';
/**
 * Wrap an API Route to check that the user has a valid session. If they're not logged in the handler will return a
 * 401 Unauthorized.
 *
 * ```js
 * // pages/api/protected-route.js
 * import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
 *
 * export default withApiAuthRequired(function ProtectedRoute(req, res) {
 *   const session = getSession(req, res);
 *   ...
 * });
 * ```
 *
 * If you visit `/api/protected-route` without a valid session cookie, you will get a 401 response.
 *
 * @category Server
 */
export declare type WithApiAuthRequired = (apiRoute: NextApiHandler) => NextApiHandler;
/**
 * @ignore
 */
export default function withApiAuthFactory(sessionCache: SessionCache): WithApiAuthRequired;
//# sourceMappingURL=with-api-auth-required.d.ts.map