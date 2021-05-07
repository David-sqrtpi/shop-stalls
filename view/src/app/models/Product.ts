import { Company } from "./Company";

export interface Product {
    id: number,
    company: Company,
    name: string,
    price: number,
    minStock: number,
    state: string,
}