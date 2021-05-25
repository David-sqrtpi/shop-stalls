import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthHeadGeneratorService {

  constructor() { }

  generateHeader():HttpHeaders{
    let authHead:string  = 'Bearer '+ localStorage.getItem('token');
    return new HttpHeaders().set("Authorization", authHead);
  }
}
