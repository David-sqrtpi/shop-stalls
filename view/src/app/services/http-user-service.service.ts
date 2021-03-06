import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpUserServiceService {

  url:string = 'http://localhost:8080/add';

  http:HttpClient;

  constructor() { }

  addUser(user:object) {
    return this.http.post(this.url, user);
  }
}
