import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JWTserviceService } from './jwtservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHeadGeneratorService {

  constructor(private Jwt:JWTserviceService) { }

  generateHeader():HttpHeaders{
    let authHead:string  = 'Bearer '+ this.Jwt.getToken();
    return new HttpHeaders().set("Authorization", authHead);
  }
}
