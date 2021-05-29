import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inventory } from '../models/inventory';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API:string = environment.url_backend + "companies";
const COMPANY_ID = localStorage.getItem('company');

@Injectable({
  providedIn: 'root'
})
export class HttpInventoryService {
  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  getInventory() {
    return this.http.get<Inventory[]>(`${URI_API}/${COMPANY_ID}/inventory`, {headers:this.headers});
  }

  getOne(barcode:string) {
    return this.http.get<Inventory>(`${URI_API}/${COMPANY_ID}/inventory/${barcode}`, {headers:this.headers});
  }
}