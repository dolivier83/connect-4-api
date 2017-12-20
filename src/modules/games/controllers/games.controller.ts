import {Controller, Get, Post, Body, Param, ParseIntPipe} from '@nestjs/common';
import {CreateGameDto} from './../dto/create-game.dto';
import {GamesService} from './../services/games.service';
import {Game} from './../interfaces/game.interface';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @Post()
    async create(@Body() body: CreateGameDto) {
        this.gamesService.create(body);
    }

    @Get(':id([0-9]+)')
    async findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Game> {
        return this.gamesService.getById(id);
    }

    @Get()
    async findAll(): Promise<Game[]> {
        return this.gamesService.findAll();
    }
}
