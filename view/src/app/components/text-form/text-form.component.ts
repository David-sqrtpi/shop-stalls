import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.css'],
  inputs: ["label"]
})
export class TextFormComponent implements OnInit {

  textForm = new FormControl("", [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    return 'Este campo es obligatorio';
  }

}
