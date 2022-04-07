import { InitAuth0 } from './instance';
import { GetAccessToken, GetSession } from './session';
import { WithApiAuthRequired } from './helpers';
import { HandleAuth, HandleCallback, HandleLogin, HandleLogout, HandleProfile } from './handlers';
export { UserProvider, UserProviderProps, UserProfile, UserContext, useUser, withPageAuthRequired, WithPageAuthRequired } from './frontend';
export declare const initAuth0: InitAuth0;
export declare const getSession: GetSession;
export declare const getAccessToken: GetAccessToken;
export declare const withApiAuthRequired: WithApiAuthRequired;
export declare const handleLogin: HandleLogin;
export declare const handleLogout: HandleLogout;
export declare const handleCallback: HandleCallback;
export declare const handleProfile: HandleProfile;
export declare const handleAuth: HandleAuth;
//# sourceMappingURL=index.browser.d.ts.map