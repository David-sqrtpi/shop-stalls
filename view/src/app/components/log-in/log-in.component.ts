import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor() { }

  ngOnInit(): void {
  }

  logIn() {
    //JWT ig
  }

}
