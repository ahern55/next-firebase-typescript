/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { Config, LoginOptions } from '../config';
import TransientStore from '../transient-store';
import { ClientFactory } from '../client';
export declare type HandleLogin = (req: IncomingMessage, res: ServerResponse, options?: LoginOptions) => Promise<void>;
export default function loginHandlerFactory(config: Config, getClient: ClientFactory, transientHandler: TransientStore): HandleLogin;
//# sourceMappingURL=login.d.ts.map