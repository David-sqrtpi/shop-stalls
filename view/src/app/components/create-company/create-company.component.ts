import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

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

  constructor(private httpService:HttpService, private httpClient:HttpClient) { }

  createCompany() {
    let body = {
      id: 3,
      name: this.name.value,
      web: this.web.value,
      address: this.address.value,
      phone: this.phone.value
    }
    this.httpService.add(body, "company/add").subscribe(
      //result => console.log("Hola")
    );

  }

  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

  ngOnInit(): void {
  }

}
