import React, { ReactElement } from 'react';
import { ConfigContext } from './use-config';
/**
 * The user claims returned from the {@link useUser} hook.
 *
 * @category Client
 */
export interface UserProfile {
    email?: string | null;
    email_verified?: boolean | null;
    name?: string | null;
    nickname?: string | null;
    picture?: string | null;
    sub?: string | null;
    updated_at?: string | null;
    org_id?: string | null;
    [key: string]: unknown;
}
/**
 * The user context returned from the {@link useUser} hook.
 *
 * @category Client
 */
export declare type UserContext = {
    user?: UserProfile;
    error?: Error;
    isLoading: boolean;
    checkSession: () => Promise<void>;
};
/**
 * @ignore
 */
declare type UserFetcher = (url: string) => Promise<UserProfile | undefined>;
/**
 * Configure the {@link UserProvider} component.
 *
 * If you have any server-side rendered pages (eg. using `getServerSideProps`), you should get the user from the server
 * side session and pass it to the `<UserProvider>` component via `pageProps` - this will refill the {@link useUser}
 * hook with the {@link UserProfile} object. eg
 *
 * ```js
 * // pages/_app.js
 * import React from 'react';
 * import { UserProvider } from '@auth0/nextjs-auth0';
 *
 * export default function App({ Component, pageProps }) {
 *   // If you've used `withPageAuthRequired`, pageProps.user can pre-populate the hook
 *   // if you haven't used `withPageAuthRequired`, pageProps.user is undefined so the hook
 *   // fetches the user from the API route
 *   const { user } = pageProps;
 *
 *   return (
 *     <UserProvider user={user}>
 *       <Component {...pageProps} />
 *     </UserProvider>
 *   );
 * }
 * ```
 *
 * If you have used a custom url for your {@link HandleProfile} API Route handler (the default is `/api/auth/me`) then
 * you should specify it here in the `profileUrl` option.
 *
 * @category Client
 */
export declare type UserProviderProps = React.PropsWithChildren<{
    user?: UserProfile;
    profileUrl?: string;
    fetcher?: UserFetcher;
} & ConfigContext>;
/**
 * @ignore
 */
export declare const UserContext: React.Context<UserContext>;
/**
 * The `useUser` hook, which will get you the {@link UserProfile} object from the server-side session by requesting it
 * from the {@link HandleProfile} API Route handler.
 *
 * ```js
 * // pages/profile.js
 * import Link from 'next/link';
 * import { useUser } from '@auth0/nextjs-auth0';
 *
 * export default function Profile() {
 *   const { user, error, isLoading } = useUser();
 *
 *   if (isLoading) return <div>Loading...</div>;
 *   if (error) return <div>{error.message}</div>;
 *   if (!user) return <Link href="/api/auth/login"><a>Login</a></Link>;
 *   return <div>Hello {user.name}, <Link href="/api/auth/logout"><a>Logout</a></Link></div>;
 * }
 * ```
 *
 * @category Client
 */
export declare type UseUser = () => UserContext;
/**
 * @ignore
 */
export declare const useUser: UseUser;
/**
 * To use the {@link useUser} hook. You must wrap your application in a `<UserProvider>` component.
 *
 * @category Client
 */
export declare type UserProvider = (props: UserProviderProps) => ReactElement<UserContext>;
declare const _default: ({ children, user: initialUser, profileUrl, loginUrl, fetcher }: UserProviderProps) => ReactElement<UserContext>;
export default _default;
//# sourceMappingURL=use-user.d.ts.map