import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(field:FormControl) {
    if (field.hasError('required')) {
      return 'Este campo es obligatorio';
    } else if (field.hasError('email')) {
      return 'Ingresa un correo electrónico válido'; 
    } else if (field.hasError('minlength')) {
      return 'Mínimo 8 caracteres';
    }
  }

  logIn() {

  }

}
