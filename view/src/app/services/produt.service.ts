import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API:string =  environment.url_backend + "products/";

@Injectable({
  providedIn: 'root'
})
export class HttpProdutService {
  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  addProduct(product:object) {
    return this.http.post(URI_API, product, {headers:this.headers, responseType:'text' as 'json'})
  }

  getAllProducts() {
    return this.http.get(URI_API, {headers:this.headers});
  }
  
  getProductById(id:number) {
    return this.http.get(URI_API+id, {headers:this.headers});
  }

  getProduct(){
    return this.http.get(URI_API, {headers:this.headers});
  }

  modifyProduct(body:object){
    return this.http.put(URI_API, body, {headers:this.headers});
  }

  deleteProduct(id:number) {
    return this.http.delete(`${URI_API}/${id}`, {headers:this.headers});
  }

}
