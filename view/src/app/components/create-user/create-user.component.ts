import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpUserServiceService } from 'src/app/services/http-user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.pattern(/^[^ñ^Ñ]+$/)]],
    companyId:[+localStorage.getItem('company')]
  })

  hidePass:boolean = true;
  waiting: boolean = false;
  response: string = null;

  constructor(private httpUser:HttpUserServiceService,
    private snackBar:MatSnackBar,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createUser() {
    this.waiting = true;
    this.response = null;
    this.httpUser.addUser(this.userForm.value).subscribe(
      () => {
        this.waiting = false;
        this.openSnackBar('Usuario Creado');
      },
      err => {
        console.log(err);
        this.response = err;
        this.waiting = false;
      }
    )
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 3000,
    });
    window.location.reload();
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
}
