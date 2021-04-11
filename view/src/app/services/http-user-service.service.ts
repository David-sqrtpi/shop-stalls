import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

@Injectable({
  providedIn: 'root'
})
export class HttpUserServiceService {

  private url:string = 'http://localhost:8080/user/';

  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  addUser(user:object) {
    return this.http.post(this.url+'add', user, {headers:this.headers, responseType:'text' as 'json'})
  }

  getUser(email:string) {
    return this.http.get(this.url+email, {headers:this.headers});
  }

  getUsers(){
    return this.http.get(this.url+"all", {headers:this.headers});
  }
  
}
