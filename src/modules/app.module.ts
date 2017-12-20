import {Module, NestModule, MiddlewaresConsumer, RequestMethod} from '@nestjs/common';

import {GamesModule} from './games/games.module';

@Module({
    modules: [GamesModule],
})
export class ApplicationModule {}