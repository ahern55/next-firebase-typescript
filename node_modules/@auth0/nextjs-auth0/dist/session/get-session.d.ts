/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { SessionCache, Session } from '../session';
/**
 * Get the user's session from the request.
 *
 * @category Server
 */
export declare type GetSession = (req: IncomingMessage | NextApiRequest, res: ServerResponse | NextApiResponse) => Session | null | undefined;
/**
 * @ignore
 */
export default function sessionFactory(sessionCache: SessionCache): GetSession;
//# sourceMappingURL=get-session.d.ts.map