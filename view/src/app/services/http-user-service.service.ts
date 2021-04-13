import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API:string = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})

export class HttpUserServiceService {

  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  addUser(user:object) {
    return this.http.post(URI_API, user, {headers:this.headers, responseType:'text' as 'json'})
  }

  getUserByEmail(email:string) {
    return this.http.get(URI_API+'email/'+email, {headers:this.headers});
  }

  getUserById(id:number) {
    return this.http.get(URI_API+id, {headers:this.headers});
  }

  getUsers(){
    return this.http.get(URI_API, {headers:this.headers});
  }
  
}
