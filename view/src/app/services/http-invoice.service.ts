import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API:string = environment.url_backend + "invoices/";

@Injectable({
  providedIn: 'root'
})
export class HttpInvoiceService {

  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  create() {
    return this.http.post(URI_API, {headers:this.headers});
  }

}