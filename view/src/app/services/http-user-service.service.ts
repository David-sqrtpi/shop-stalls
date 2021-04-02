import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

@Injectable({
  providedIn: 'root'
})
export class HttpUserServiceService {

  private url:string = 'http://localhost:8080/user/';

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  addUser(user:object) {
    const headers = this.header.generateHeader();
    return this.http.post(this.url+'add', user, {headers, responseType:'text' as 'json'})
  }

  signUp(user:object){
    return this.http.post(this.url+'sign-up', user, {responseType:'text' as 'json'})
  }

  getUser(email:string) {
    const headers = this.header.generateHeader();
    return this.http.get(this.url+'get/'+email, {headers});
  }
  
}