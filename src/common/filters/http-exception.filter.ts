import {HttpException, ExceptionFilter, ForbiddenException, Catch} from '@nestjs/common';
import {LogsService} from './../../modules/logs/services/logs.service';
import {Response} from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    private logsService: LogsService;

    constructor() {
        this.logsService = new LogsService();
    }

    catch(exception: HttpException, res: Response) {
        const status = exception.getStatus();

        this.logsService.error('Exception', exception);
        res.status(status).end();
    }
}