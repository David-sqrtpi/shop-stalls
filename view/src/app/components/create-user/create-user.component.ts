import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from "@angular/forms";

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

  constructor() { }

  ngOnInit(): void {
  }

  createUser() {
    let user: object = {
      name: this.name.value,
      last: this.last.value,
      email: this.email.value,
      age: this.age.value,
      id_company: 1
    }
    console.log(user);
  }

  getErrorMessage() {
    return 'duck';
  }

}
