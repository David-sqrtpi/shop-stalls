import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import { JWTserviceService } from 'src/app/services/jwtservice.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  private data:object;
  private token:string
  constructor(private Jwt:JWTserviceService) { }

  ngOnInit(): void {
  }

  public logIn() {
    this.Jwt.generateToken(this.extractInfo()).subscribe(
      token => console.log(token)
    );
  }

  public get(token){
    let authToken = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", authToken);
    //this.httpClient.get("localhost:8080/", {headers, responseType:'text' as 'json'});
  }

  extractInfo(){
    return {
      password: this.password.value,
      username: this.username.value
    }    
  }

}
