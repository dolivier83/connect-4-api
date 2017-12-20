import {Module} from '@nestjs/common';
import {NestModule, MiddlewaresConsumer} from '@nestjs/common/interfaces';
import {LogsService} from './services/logs.service';
import {LogsMiddleware} from './middlewares/logs.middleware';

@Module({
    components: [LogsService],
    exports: [LogsMiddleware, LogsService],
})
export class LogsModule {}