import {Component} from '@nestjs/common';
import {CreateGameDto} from '../dto/create-game.dto';
import {Game} from './../interfaces/game.interface';

@Component()
export class GamesService {
    private readonly games: Game[] = [];

    /**
     * Add / save a new instance of `Game`.
     *
     * @param {Game} gameDto `Game` instance to be added.
     */
    create(gameDto: CreateGameDto) {
        // TODO: should be create by TypeORM, and should strip undesired properties
        const game = Object.assign({}, gameDto) as Game;
        this.games.push(game);
    }

    /**
     * Get a specific `Game` instance using its `id` property.
     *
     * @param {number} id Unique identifier of the desired `Game`.
     *
     * @return {Game} The target `Game` or `undefined`.
     */
    getById(id: number): Game {
        return this.games.find(g => g.id === id);
    }

    /**
     * Get an `Array` of all instances of `Game`.
     *
     * @return {Game[]} A copy of the current Games collection.
     */
    findAll(): Game[] {
        return this.games.slice();
    }
}