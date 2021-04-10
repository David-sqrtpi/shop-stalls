import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpUserServiceService } from 'src/app/services/http-user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.pattern(/^[^ñ^Ñ]+$/)]),
    role: new FormControl('', Validators.required)
  })

  hidePass:boolean = true;
  waiting: boolean = false;
  response: string = null;

  constructor(private httpUser: HttpUserServiceService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  createUser() {

    this.waiting = true;
    this.response = null;

    this.httpUser.addUser(this.userForm.value).subscribe(
      response => {
        this.waiting = false;
        console.log(response);
        this.openSnackBar('Usuario Creado', "");
        this.userForm.reset();
      },
      err => {
        console.log(err);
        this.response = this.email.value + " ya está en uso";
        this.waiting = false;
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  
  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get role() {
    return this.userForm.get('role');
  }

}
