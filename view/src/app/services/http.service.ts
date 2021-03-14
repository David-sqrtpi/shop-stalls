import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url:string = 'http://localhost:8080/';

  constructor(private httpClient:HttpClient) { }

  add(data:object, endpoint:string){
    return this.httpClient.post(this.url + endpoint, data)
  }
}
