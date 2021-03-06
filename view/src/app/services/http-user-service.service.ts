import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpUserServiceService {

  private url:string = 'http://localhost:8080/user/add';

  private http:HttpClient;

  constructor() { }

  addUser(user:object) {
    return this.http.post(this.url, user);
  }
}
