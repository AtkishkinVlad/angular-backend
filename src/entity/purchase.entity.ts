import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";

export interface PurchaseEntity extends InMemoryDBEntity {
    title: string;
    price: number;
    comment?: string;
}
