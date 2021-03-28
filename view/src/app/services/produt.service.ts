import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutService {

  private url:string = 'http://localhost:8080/product/';

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  addProduct(product:object){
    const headers = this.header.generateHeader();
    return this.http.post(this.url+'add', product, {headers, responseType:'text' as 'json'})
  }

}
