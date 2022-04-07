/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { TokenSet } from 'openid-client';
import { Config, SessionCache as ISessionCache, CookieStore } from '../auth0-session';
import Session from './session';
declare type NextApiOrPageRequest = IncomingMessage | NextApiRequest;
declare type NextApiOrPageResponse = ServerResponse | NextApiResponse;
export default class SessionCache implements ISessionCache {
    private config;
    private cookieStore;
    private cache;
    constructor(config: Config, cookieStore: CookieStore);
    init(req: NextApiOrPageRequest, res: NextApiOrPageResponse): void;
    create(req: NextApiOrPageRequest, res: NextApiOrPageResponse, session: Session): void;
    delete(req: NextApiOrPageRequest, res: NextApiOrPageResponse): void;
    isAuthenticated(req: NextApiOrPageRequest, res: NextApiOrPageResponse): boolean;
    getIdToken(req: NextApiOrPageRequest, res: NextApiOrPageResponse): string | undefined;
    set(req: NextApiOrPageRequest, res: NextApiOrPageResponse, session: Session | null): void;
    get(req: NextApiOrPageRequest, res: NextApiOrPageResponse): Session | null | undefined;
    fromTokenSet(tokenSet: TokenSet): Session;
}
export {};
//# sourceMappingURL=cache.d.ts.map