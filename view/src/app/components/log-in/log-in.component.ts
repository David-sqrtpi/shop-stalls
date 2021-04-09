import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { JWTserviceService } from 'src/app/services/jwtservice.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  waiting:boolean = false;

  hide:boolean = true;

  result = null;

  loginForm = new FormGroup({
    username:new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('', [Validators.minLength(8), Validators.required, Validators.pattern(/^[^ñ]+$/)])
  })

  constructor(private Jwt:JWTserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  public logIn() {
    console.log(this.loginForm.value['username']);
    
    this.waiting = true;
    this.Jwt.generateToken(this.loginForm.value).subscribe(
      token => {
        localStorage.setItem('token', token.toString());
        localStorage.setItem('email', this.loginForm.value["username"]);
        this.router.navigate(["/welcome"]);
      },
      err => {
        console.log(err)
        this.waiting = false;
        this.result = JSON.parse(err.error).message;
      },
      () => {
        this.waiting = false;
      }
    );
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
