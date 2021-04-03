import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpUserServiceService } from 'src/app/services/http-user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  name = new FormControl('');
  email = new FormControl('', [Validators.email]);
  password = new FormControl('', [Validators.minLength(8)]);
  role = new FormControl();

  waiting:boolean = false;
  response:string = null;


  roles = [
    {value: 1, name:"Vendedor"},
    {value: 2, name:"Contador"}
  ]

  constructor(private httpUser:HttpUserServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  createUser() {
    
    this.waiting = true;
    this.response = null;
    
    this.httpUser.addUser(this.buildUser()).subscribe(
      response => {
        this.waiting = false;
        console.log(response);
        alert("Usuario creado");
        window.location.reload();
      },
      err => {
        console.log(err);
        this.response = this.email.value+" ya está en uso";
        this.waiting = false;
      }
    )
  }

  buildUser(){
    return {
      name: this.name.value,
      email: this.email.value,
      id_company: 0,
      password:this.password.value,
      roles:[
        {
          id:this.role.value
        }
      ]
    }
  }

  getErrorMessage() {
    return 'Campo requerido';
  }

}
