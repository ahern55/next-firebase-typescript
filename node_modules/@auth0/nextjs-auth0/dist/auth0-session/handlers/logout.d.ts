/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { Config, LogoutOptions } from '../config';
import { ClientFactory } from '../client';
import { SessionCache } from '../session-cache';
export declare type HandleLogout = (req: IncomingMessage, res: ServerResponse, options?: LogoutOptions) => Promise<void>;
export default function logoutHandlerFactory(config: Config, getClient: ClientFactory, sessionCache: SessionCache): HandleLogout;
//# sourceMappingURL=logout.d.ts.map