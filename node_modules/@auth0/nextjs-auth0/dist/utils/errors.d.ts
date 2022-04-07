import { HttpError } from 'http-errors';
/**
 * The error thrown by {@link GetAccessToken}
 *
 * @category Server
 */
export declare class AccessTokenError extends Error {
    code: string;
    constructor(code: string, message: string);
}
export declare function htmlSafe(input: string): string;
/**
 * The error thrown by API route handlers.
 *
 * Because the error message can come from the OpenID Connect `error` query parameter we
 * do some basic escaping which makes sure the default error handler is safe from XSS.
 *
 * If you write your own error handler, you should **not** render the error message
 * without using a templating engine that will properly escape it for other HTML contexts first.
 *
 * @category Server
 */
export declare class HandlerError extends Error {
    status: number | undefined;
    code: string | undefined;
    constructor(error: Error | AccessTokenError | HttpError);
}
//# sourceMappingURL=errors.d.ts.map