import { Product } from "./Product";
import { Purchase } from "./purchase";

export interface PurchaseItem {
    id: number,
    purchase: Purchase,
    product: Product,
    quantity: number,
    subtotal: number
}