import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpUserServiceService {

  private url:string = 'http://localhost:8080/user/';

  constructor(private http:HttpClient, private storage:LocalStorageService) { }

  addUser(user:object) {
    let authHead:string  = 'Bearer '+ this.storage.get('token').toString();
    const headers = new HttpHeaders().set("Authorization", authHead);
    
    return this.http.post(this.url+'add', user, {headers, responseType:'text' as 'json'})
  }
  
}
