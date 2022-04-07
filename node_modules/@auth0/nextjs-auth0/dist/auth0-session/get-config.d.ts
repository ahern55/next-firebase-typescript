import { Config } from './config';
export declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer I> ? Array<DeepPartial<I>> : DeepPartial<T[P]>;
};
export declare type ConfigParameters = DeepPartial<Config>;
export declare const get: (params?: ConfigParameters) => Config;
//# sourceMappingURL=get-config.d.ts.map