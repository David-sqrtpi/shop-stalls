import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from "@angular/forms";
import { HttpUserServiceService } from 'src/app/services/http-user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  name = new FormControl('');
  last = new FormControl('');
  age = new FormControl('');
  email = new FormControl('', [Validators.email]);
  password = new FormControl('', [Validators.minLength(8)]);

  constructor(private httpUser:HttpUserServiceService) { }

  ngOnInit(): void {
  }

  createUser() {
    console.log(this.buildUser());
    
    this.httpUser.addUser(this.buildUser()).subscribe(
      response => console.log(response)
    )
  }

  buildUser(){
    return {
      name: this.name.value,
      last: this.last.value,
      email: this.email.value,
      age: this.age.value,
      id_company: 0,
      password:this.password.value
    }
  }

  getErrorMessage() {
    return 'Campo requerido';
  }

}
