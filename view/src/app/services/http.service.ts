import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Service } from '../models/service';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API:string =  environment.url_backend + "services";

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  addServices(service:object) {
    return this.http.post(URI_API, service, {headers:this.headers, responseType:'text' as 'json'})
  }
  
  getServicesById<Service>(id:number) {
    return this.http.get(URI_API+id, {headers:this.headers});
  }

  getServices(){
    return this.http.get<Service[]>(`${URI_API}?company=${localStorage.getItem('company')}`, {headers:this.headers});
  }

  modifyServices(body:object){
    return this.http.put(URI_API+"1", body, {headers:this.headers});
  }

  deleteProduct(id:number) {
    return this.http.delete(`${URI_API}/${id}`, {headers:this.headers});
  }
}
