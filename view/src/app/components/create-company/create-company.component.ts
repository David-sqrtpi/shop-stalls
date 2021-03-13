import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  name = new FormControl("", [Validators.required]);
  web = new FormControl("", [Validators.required]);
  address = new FormControl("", [Validators.required]);
  phone = new FormControl("", [Validators.required]);

  constructor() { }

  createCompany() {

  }

  getErrorMessage(field:FormControl) {
    if (field.hasError('required')) {
      return 'Este campo es obligatorio';
    }
  }

  ngOnInit(): void {
  }

}
