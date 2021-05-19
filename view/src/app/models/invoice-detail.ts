import { Invoice } from "./invoice";
import { Product } from "./Product";
import { Service } from "./service";

export interface InvoiceDetail {
    id: number,
    invoice: Invoice,
    product: Product,
    service: Service,
    quantity: number,
    price: number
}