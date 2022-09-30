import { Address } from "./address";
import { Category } from "./category";
import { Configurations } from "./configurations";
import { Item } from "./item";
import { Order } from "./order";

export class Business {

    id : string | null = null;
    name : string | null = null;
    address : Address | null = null;
    categories : Category[] | null = null;
    items : Item[] | null = null;
    configurations : Configurations | null = null;
    orders : Order[] | null = null;
    users : string[] | null = null;
    units : string[] | null = null;

    constructor(options?: Partial<Business>) {
        Object.assign(this, options);
    }
}
