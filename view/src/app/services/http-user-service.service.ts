import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUserServiceService {

  private url:string = 'http://localhost:8080/user/create';

  constructor(private http:HttpClient) { }

  addUser(user:object) {
    return this.http.post(this.url, user);
  }
}
