import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inventory } from '../models/inventory';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API:string = environment.url_backend + "companies";

@Injectable({
  providedIn: 'root'
})
export class HttpInventoryService {
  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  getInventory() {
    return this.http.get<Inventory[]>(`${URI_API}/${localStorage.getItem('company')}/inventory`, {headers:this.headers});
  }

  addToInventory() {

  }
}