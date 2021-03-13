import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

import {HttpUserServiceService} from '../../services/http-user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private httpUserServiceService:HttpUserServiceService, private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
  
  name = new FormControl('',);
  last = new FormControl('',);
  age = new FormControl('',);
  password = new FormControl('', [Validators.minLength(8)]);
  email = new FormControl('', [Validators.email]);

  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

  signUpUser() {
    
    let user:object = {
      name: this.name.value,
      last: this.last.value,
      email: this.email.value,
      password: this.password.value,
      age: this.age.value
    }

    console.log(user);
    
    this.httpUserServiceService.addUser(user).subscribe();
    
  }
  
}