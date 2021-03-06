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

  constructor() { }

  ngOnInit(): void {
  }
  
  name = new FormControl('', [Validators.required]);
  last = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  age = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  formDisabled = true;
  
  private httpUserServiceService:HttpUserServiceService;
  private httpClient:HttpClient;

  getErrorMessage(field:FormControl) {
    if (field.hasError('required')) {
      return 'Este campo es obligatorio';
    } else if (field.hasError('email')) {
      return 'Ingresa un correo electrónico válido'; 
    } else if (field.hasError('minlength')) {
      return 'Mínimo 8 caracteres';
    }
  }
  
}