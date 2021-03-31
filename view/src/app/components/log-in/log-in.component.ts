import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { JWTserviceService } from 'src/app/services/jwtservice.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  waiting:boolean = false;

  result = null;
  
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private Jwt:JWTserviceService, private storage:LocalStorageService, private router:Router) { }

  ngOnInit(): void {
  }

  public logIn() {
    this.waiting = true;
    this.Jwt.generateToken(this.buildObject()).subscribe(
      token => {
        this.storage.set('token', token.toString())
        this.router.navigate(["/welcome"])
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

  buildObject(){
    return {
      password: this.password.value,
      username: this.username.value
    }    
  }
}
