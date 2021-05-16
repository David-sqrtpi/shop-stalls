import { Company } from "./Company";

export interface Product {
    id?: number,
    // category: Category
    company?: Company,
    name?: string,
    minStock?: number,
    state?: string,
    barcode?: string
}