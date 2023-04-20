import {Module} from '@nestjs/common';

import {PurchasesController} from './purchases.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
    controllers: [PurchasesController],
    imports: [InMemoryDBModule]
})
export class PurchasesModule {
}
