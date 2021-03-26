import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
  inputs:["email"]
})
export class EmailFormComponent implements OnInit {

  email = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo requerido';
    } else if (this.email.hasError('email')) {
      return 'Ingresa un correo electrónico válido'; 
    }
  }

}
