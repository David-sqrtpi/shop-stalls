import { Supplier } from "./Supplier";

export interface Purchase {
    id: number,
    supplier: Supplier,
    date: Date,
    amountToPay: number
}