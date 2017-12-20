import {Component} from '@nestjs/common';
import {Logger, transports} from 'winston';

@Component()
export class LogsService extends Logger {
    constructor() {
        super({
            transports: [
                new transports.Console({
                    timestamp: true,
                    colorize: true,
                    prettyPrint: true,
                }),
            ],
        });
    }
}
