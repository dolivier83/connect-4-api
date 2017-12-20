import {NestFactory} from '@nestjs/core';
import * as bodyParser from 'body-parser';

import {ApplicationModule} from './modules/app.module';
import {HttpExceptionFilter} from './common/filters/http-exception.filter';
import {ValidationPipe} from './common/pipes/validation.pipe';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.setGlobalPrefix('/v1');
    app.use(bodyParser.json());
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}

bootstrap();
