import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
  inputs:["password"]
})
export class PasswordFormComponent implements OnInit {

  password = new FormControl("", [Validators.minLength(8)]);

  hide:boolean = true;

  errorMessage:string = "Minimo 8 caracteres";

  constructor() { }

  ngOnInit(): void {
  }

}
