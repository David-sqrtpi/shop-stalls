import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JWTserviceService {

  private url:string = "http://localhost:8080/authenticate";

  constructor(private httpClient:HttpClient) { }

  public generateToken(data:object){
    return this.httpClient.post(this.url, data, {responseType:'text' as 'json'});
  }

}
