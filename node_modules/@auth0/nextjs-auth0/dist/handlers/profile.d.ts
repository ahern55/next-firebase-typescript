import { NextApiResponse, NextApiRequest } from 'next';
import { ClientFactory } from '../auth0-session';
import { SessionCache, Session, GetAccessToken } from '../session';
export declare type AfterRefetch = (req: NextApiRequest, res: NextApiResponse, session: Session) => Promise<Session> | Session;
/**
 * Custom options for {@link HandleProfile}
 *
 * @category Server
 */
export declare type ProfileOptions = {
    /**
     * If set to `true` this will refetch the user profile information from `/userinfo` and save it to the session.
     */
    refetch?: boolean;
    /**
     * Like {@AfterCallback} and {@AfterRefresh} when a session is created, you can use this function to validate or
     * add/remove claims after the session is updated. Will only run if {@link ProfileOptions.refetch} is `true`
     */
    afterRefetch?: AfterRefetch;
};
/**
 * The handler for the `/api/auth/me` route.
 *
 * @throws {@Link HandlerError}
 *
 * @category Server
 */
export declare type HandleProfile = (req: NextApiRequest, res: NextApiResponse, options?: ProfileOptions) => Promise<void>;
/**
 * @ignore
 */
export default function profileHandler(getClient: ClientFactory, getAccessToken: GetAccessToken, sessionCache: SessionCache): HandleProfile;
//# sourceMappingURL=profile.d.ts.map