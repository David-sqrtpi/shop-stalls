import { Product } from "./Product";

export interface Inventory {
    id: number,
    product: Product,
    quantity: number,
    purchasePrice: number,
    salePrice: number
}