import React, { ReactElement } from 'react';
export declare type ConfigContext = {
    loginUrl?: string;
};
export declare type ConfigProviderProps = React.PropsWithChildren<ConfigContext>;
export declare type UseConfig = () => ConfigContext;
export declare const useConfig: UseConfig;
declare const _default: ({ children, loginUrl }: ConfigProviderProps) => ReactElement<ConfigContext>;
export default _default;
//# sourceMappingURL=use-config.d.ts.map