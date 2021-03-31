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

  constructor(private httpUser:HttpUserServiceService) { }

  ngOnInit(): void {
  }
  
  name = new FormControl('');
  last = new FormControl('');
  age = new FormControl('');
  password = new FormControl('', [Validators.minLength(8)]);
  email = new FormControl('', [Validators.email]);

  signUp() {    
    this.httpUser.signUp(this.buildObject()).subscribe(
      response => console.log(response)
    ); 
  }

  private buildObject():object{
    return {
      name: this.name.value,
      last: this.last.value,
      email: this.email.value,
      password: this.password.value,
      age: this.age.value,
      id_company: 1,
    }
  }

  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

}