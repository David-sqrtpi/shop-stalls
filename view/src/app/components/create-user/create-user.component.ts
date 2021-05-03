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
    companyId:[+localStorage.getItem('company')],
    roles: this.fb.array([
      this.fb.control({
        //id:['']//
      })
    ])
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

    console.log(this.userForm.value);
    

    this.httpUser.addUser(this.userForm.value).subscribe(
      response => {
        this.waiting = false;
        console.log(response);
        this.openSnackBar('Usuario Creado', "");
      },
      err => {
        console.log(err);
        this.response = err;
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

  get roles() {
    return this.userForm.get('roles') as FormArray;
  }

  addRole(value) {
    this.roles.clear();
    this.roles.push(this.fb.control(value));
  }

}
