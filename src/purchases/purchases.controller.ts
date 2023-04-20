import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

import {PurchaseEntity} from '../entity/purchase.entity';

@Controller('purchases')
export class PurchasesController {
    constructor(private readonly purchaseService: InMemoryDBService<PurchaseEntity>) {}

    @Get()
    getAll(): PurchaseEntity[] {
        return this.purchaseService.getAll();
    }

    @Post()
    create(@Body() dto: Partial<PurchaseEntity>): PurchaseEntity {
        return this.purchaseService.create(dto);
    }

    @Put(':id')
    update(@Body() dto: PurchaseEntity, @Param('id') id: string): void {
        return this.purchaseService.update(dto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
        return this.purchaseService.delete(id);
    }
}
