import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JWTserviceService {

  private url:string = "http://localhost:8080/login";

  constructor(private httpClient:HttpClient) { }

  public generateToken(data:object){
    return this.httpClient.post(this.url, data, {responseType:'text' as 'json'});
  }
}
