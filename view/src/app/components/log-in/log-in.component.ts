import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import { JWTserviceService } from 'src/app/services/jwtservice.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private waiting:boolean = false;

  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private Jwt:JWTserviceService, private storage:LocalStorageService) { }

  ngOnInit(): void {
  }

  public logIn() {
    this.Jwt.generateToken(this.buildObject()).subscribe(
      token => this.storage.set('token', token.toString())
    );
  }

  buildObject(){
    return {
      password: this.password.value,
      username: this.username.value
    }    
  }

}
