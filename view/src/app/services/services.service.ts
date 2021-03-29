import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url:string = 'http://localhost:8080/services/';

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  addServices(services:object){
    const headers = this.header.generateHeader();
    return this.http.post(this.url+'add', services, {headers, responseType:'text' as 'json'})
  }
  modifyServices(services:object){
    const headers = this.header.generateHeader();
    return this.http.put(this.url+'modify', services, {headers, responseType:'text' as 'json'})
  }
  
}
