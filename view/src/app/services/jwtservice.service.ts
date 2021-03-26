import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JWTserviceService {

  private url:string = "http://localhost:8080/authenticate";

  constructor(private httpClient:HttpClient, private storage:LocalStorageService) { }

  public generateToken(data:object){
    return this.httpClient.post(this.url, data, {responseType:'text' as 'json'});
  }

  public getToken(){
    return this.storage.get('token');
  }
}
