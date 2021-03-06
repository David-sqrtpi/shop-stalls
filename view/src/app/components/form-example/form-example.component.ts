import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  field = new FormControl ('', [Validators.required], []);

  getField(){
    console.log(this.field.value);
  }

}
