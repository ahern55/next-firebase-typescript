/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { Config } from './config';
export default class CookieStore {
    config: Config;
    private keystore;
    private currentKey;
    private chunkSize;
    constructor(config: Config);
    private encrypt;
    private decrypt;
    private calculateExp;
    read(req: IncomingMessage): [{
        [key: string]: any;
    }?, number?];
    save(req: IncomingMessage, res: ServerResponse, session: {
        [key: string]: any;
    } | undefined | null, createdAt?: number): void;
}
//# sourceMappingURL=cookie-store.d.ts.map