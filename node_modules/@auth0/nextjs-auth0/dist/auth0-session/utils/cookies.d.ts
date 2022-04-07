import { IncomingMessage, ServerResponse } from 'http';
import { CookieSerializeOptions } from 'cookie';
export declare const getAll: (req: IncomingMessage) => {
    [key: string]: string;
};
export declare const get: (req: IncomingMessage, name: string) => string;
export declare const set: (res: ServerResponse, name: string, value: string, options?: CookieSerializeOptions) => void;
export declare const clear: (res: ServerResponse, name: string, options?: CookieSerializeOptions) => void;
//# sourceMappingURL=cookies.d.ts.map