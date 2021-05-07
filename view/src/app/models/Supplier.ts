import { Company } from "./Company";

export interface Supplier {
    id:number,
    company: Company,
    name: string,
    address: string,
    phoneNumber:string
}