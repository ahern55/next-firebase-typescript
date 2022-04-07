import { Handlers, HandleAuth, HandleLogin, HandleProfile, HandleLogout, HandleCallback, LoginOptions, LogoutOptions, GetLoginState, ProfileOptions, CallbackOptions, AfterCallback, AfterRefetch } from './handlers';
import { SessionCache, GetSession, GetAccessToken, Session, AccessTokenRequest, GetAccessTokenResult, Claims } from './session/';
import { WithApiAuthRequired, WithPageAuthRequired, GetServerSidePropsResultWithSession, WithPageAuthRequiredOptions, PageRoute } from './helpers';
import { InitAuth0 } from './instance';
import { ConfigParameters } from './config';
export declare const initAuth0: InitAuth0;
export declare const getSession: GetSession;
export declare const getAccessToken: GetAccessToken;
export declare const withApiAuthRequired: WithApiAuthRequired;
export declare const withPageAuthRequired: WithPageAuthRequired;
export declare const handleLogin: HandleLogin;
export declare const handleLogout: HandleLogout;
export declare const handleCallback: HandleCallback;
export declare const handleProfile: HandleProfile;
export declare const handleAuth: HandleAuth;
export { UserProvider, UserProviderProps, UserProfile, UserContext, useUser, WithPageAuthRequiredProps } from './frontend';
export { AccessTokenError, HandlerError } from './utils/errors';
export { ConfigParameters, HandleAuth, HandleLogin, HandleProfile, HandleLogout, HandleCallback, ProfileOptions, Handlers, GetServerSidePropsResultWithSession, WithPageAuthRequiredOptions, PageRoute, WithApiAuthRequired, WithPageAuthRequired, SessionCache, GetSession, GetAccessToken, Session, Claims, AccessTokenRequest, GetAccessTokenResult, CallbackOptions, AfterCallback, AfterRefetch, LoginOptions, LogoutOptions, GetLoginState };
//# sourceMappingURL=index.d.ts.map