import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  name = new FormControl("");
  web = new FormControl("");
  address = new FormControl("");
  phone = new FormControl("");

  constructor() { }

  createCompany() {

  }

  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

  ngOnInit(): void {
  }

}
