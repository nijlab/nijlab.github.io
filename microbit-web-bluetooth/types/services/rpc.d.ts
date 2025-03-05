import { UartService } from './uart';
import { TypedDispatcher } from '../event-dispatcher';
/**
 * Events raised by the RPV service
 */
export interface UartEvents {
    /**
     * @hidden
     */
    newListener: keyof UartEvents;
    /**
     * @hidden
     */
    removeListener: keyof UartEvents;
    /**
     * Command received event
     */
    receiveCommand: {
        command: string;
        value?: number;
    };
}
declare const RpcService_base: new () => TypedDispatcher<UartEvents>;
/**
 * RPC Service
 */
export declare class RpcService extends RpcService_base {
    protected uartService: UartService;
    constructor(uartService: UartService);
    arg(value: number, command?: string): Promise<void>;
    narg(command?: string): Promise<void>;
}
export {};
