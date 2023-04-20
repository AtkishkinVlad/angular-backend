import {Controller, Get, Param, Post, Body} from '@nestjs/common';

import { PositionEntity } from '../entity/position.entity';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Controller('positions')
export class PositionsController {
    constructor (private readonly entitiesService: InMemoryDBService<PositionEntity>) {}

    @Post()
    create(@Body() dto: Partial<PositionEntity>): PositionEntity {
        return this.entitiesService.create(dto);
    }

    @Get(':search')
    search(@Param('search') search: string): PositionEntity[] {
        return this.entitiesService.getAll();
    }
}
