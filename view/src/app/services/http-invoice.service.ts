import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API:string = environment.url_backend + "invoices";

@Injectable({
  providedIn: 'root'
})
export class HttpInvoiceService {

  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  create(invoice) {
    return this.http.post(URI_API, invoice, {headers:this.headers});
  }

  addProduct(invoice:number, product:number, quantity:number) {
    return this.http.put(`${URI_API}/${invoice}/product?product=${product}&quantity=${quantity}`, null, {headers:this.headers});
  }

  getInvoice(invoice:number) {
    return this.http.get(`${URI_API}/${invoice}`, {headers:this.headers});
  }

  getInvoices() {
    return this.http.get(`${URI_API}?company=${localStorage.getItem('company')}`, {headers:this.headers});
  }

}