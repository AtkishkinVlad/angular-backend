import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

import { PurchasesModule } from './purchases/purchases.module';
import { PositionsModule } from './positions/positions.module';

@Module({
  imports: [InMemoryDBModule.forRoot({}), PurchasesModule, PositionsModule],
})
export class AppModule {}
