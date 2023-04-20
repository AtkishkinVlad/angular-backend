import { Module } from '@nestjs/common';

import { PositionsController } from './positions.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  controllers: [PositionsController],
  imports: [InMemoryDBModule]
})
export class PositionsModule {}
