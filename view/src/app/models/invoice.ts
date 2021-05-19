import { InvoiceDetail } from "./invoice-detail";

export interface Invoice {
    id: number,
    //sale:Sale,
    clientName: string,
    dni: number,
    date: Date,
    total: number,
    items: InvoiceDetail[]
}