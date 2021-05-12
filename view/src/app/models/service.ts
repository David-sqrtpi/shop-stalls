import { Company } from "./Company";

export interface Service {
    id: number,
    company: Company,
    code: string,
    name: string,
    price: number,
    details: string,
    state: string
}
