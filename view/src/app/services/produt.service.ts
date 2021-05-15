import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API:string = environment.url_backend + "products";

@Injectable({
  providedIn: 'root'
})
export class HttpProdutService {
  private headers = this.header.generateHeader();
  private company:number = +localStorage.getItem('company');
  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  addProduct(product:object) {
    return this.http.post(URI_API, product, {headers:this.headers, responseType:'text' as 'json'})
  }

  getProducts() {
    return this.http.get<Product[]>(`${URI_API}/?company=${this.company}`, {headers:this.headers});
  }
  
  getProductById(id:number) {
    return this.http.get<Product>(`${URI_API}/${id}?company=${this.company}`, {headers:this.headers});
  }

  getProductByBarcode(barcode:string) {
    return this.http.get<Product>(`${URI_API}/${barcode}?company=${this.company}`, {headers:this.headers});
  }

  modifyProduct(body:object){
    return this.http.put(URI_API, body, {headers:this.headers});
  }

  deleteProduct(id:string) {
    return this.http.delete(`${URI_API}/${id}`, {headers:this.headers});
  }
}