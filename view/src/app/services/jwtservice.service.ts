import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JWTserviceService {

  private url:string = environment.url_backend + "login";

  constructor(private httpClient:HttpClient) { }

  public generateToken(data:object){
    return this.httpClient.post(this.url, data, {responseType:'text' as 'json'});
  }
}
