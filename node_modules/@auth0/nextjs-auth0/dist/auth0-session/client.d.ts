import { Client } from 'openid-client';
import { Config } from './config';
export interface ClientFactory {
    (): Promise<Client>;
}
export declare type Telemetry = {
    name: string;
    version: string;
};
export default function get(config: Config, { name, version }: Telemetry): ClientFactory;
//# sourceMappingURL=client.d.ts.map