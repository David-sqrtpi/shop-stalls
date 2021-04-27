import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHeadGeneratorService } from './auth-head-generator.service';
const URI_API:string = 'http://localhost:8080/services/';
@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  addServices(service:object) {
    return this.http.post(URI_API, service, {headers:this.headers, responseType:'text' as 'json'})
  }

  getAllServices() {
    return this.http.get(URI_API, {headers:this.headers});
  }
  
  getServicesById(id:number) {
    return this.http.get(URI_API+id, {headers:this.headers});
  }

  getServices(){
    return this.http.get(URI_API, {headers:this.headers});
  }

  modifyProduct(body:object){
    return this.http.put(URI_API+"1", body, {headers:this.headers});
  }
  
}
