import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
  inputs:["password"]
})
export class PasswordFormComponent implements OnInit {

  password = new FormControl();

  hide:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    return this.password.hasError('required')? 'Campo requerido':'Mínimo 8 caracteres';
  }

}
