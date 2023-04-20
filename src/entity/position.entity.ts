
import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";

export interface PositionEntity extends InMemoryDBEntity {
    title: string;
    price: number;
}
