import {Module} from '@nestjs/common';
import {NestModule, MiddlewaresConsumer} from '@nestjs/common/interfaces';

import {GamesController} from './controllers/games.controller';
import {GamesService} from './services/games.service';
import {LogsModule} from './../logs/logs.module';
import {LogsMiddleware} from './../logs/middlewares/logs.middleware';

@Module({
    modules: [LogsModule],
    controllers: [GamesController],
    components: [GamesService],
})
export class GamesModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LogsMiddleware).forRoutes(GamesController);
    }
}