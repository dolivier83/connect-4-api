import {Middleware, NestMiddleware, ExpressMiddleware} from '@nestjs/common';
import {LogsService} from './../services/logs.service';

@Middleware()
export class LogsMiddleware implements NestMiddleware {
    constructor(private readonly logsService: LogsService) {}

    resolve(...args: any[]): ExpressMiddleware {
        return (req, res, next) => {
            this.logsService.info(LogsMiddleware.formatOutput(req));
            next();
        };
    }

    static formatOutput(req): string {
        const base = `${req.method} - ${req.url}`;
        const reqHasBody = req.body && Object.keys(req.body).length !== 0;
        return reqHasBody ? `${base} - ${JSON.stringify(req.body)}` : base;
    }
}