import { NextApiResponse, NextApiRequest } from 'next';
import { HandleLogout as BaseHandleLogout } from '../auth0-session';
/**
 * Custom options to pass to logout.
 *
 * @category Server
 */
export interface LogoutOptions {
    /**
     *  URL to returnTo after logout, overrides the
     *  Default in {@link BaseConfig.routes.postLogoutRedirect routes.postLogoutRedirect}
     */
    returnTo?: string;
}
/**
 * The handler for the `api/auth/logout` route.
 *
 * @throws {@Link HandlerError}
 *
 * @category Server
 */
export declare type HandleLogout = (req: NextApiRequest, res: NextApiResponse, options?: LogoutOptions) => Promise<void>;
/**
 * @ignore
 */
export default function handleLogoutFactory(handler: BaseHandleLogout): HandleLogout;
//# sourceMappingURL=logout.d.ts.map