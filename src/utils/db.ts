import Dexie, {Table} from 'dexie';
import {IOrder, IProduct} from "../types/types.ts";

export class MySubClassedDexie extends Dexie {
    // 'products' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    products!: Table<IProduct>;
    orders!: Table<IOrder>;
    shippingPrice!: Table<{
        value: number
    }>;

    constructor() {
        super('cart-db');
        this.version(1).stores({
            orders: '++id',
            products: '++id, name',
            shippingPrice: '++id, value',
        });
    }
}

export const db = new MySubClassedDexie();