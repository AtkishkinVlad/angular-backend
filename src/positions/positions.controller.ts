import {Controller, Get, Param} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ILike, Repository} from 'typeorm';
import {PositionEntity} from '../entity/position.entity';

@Controller('positions')
export class PositionsController {
    @InjectRepository(PositionEntity)
    protected readonly entitiesRepository: Repository<PositionEntity>;

    @Get()
    async search(): Promise<PositionEntity[]> {
        return this.entitiesRepository.find();
    }
}
