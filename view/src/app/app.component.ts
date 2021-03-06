import { Component } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

import { HttpClient} from '@angular/common/http';

import {HttpUserServiceService} from '../app/services/http-user-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Shop Stalls';

  name = new FormControl('', [Validators.required]);
  last = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  
  httpUserServiceService:HttpUserServiceService;
  httpClient:HttpClient;

  onSubmit(user){
    console.log(user);
  }

  error(field:any){
    if(!field)
    return "Este campo es obligatorio";
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un correo';
    }

    return this.email.hasError('email') ? 'Ingresa un correo electrónico válido' : '';
  }
  
}
