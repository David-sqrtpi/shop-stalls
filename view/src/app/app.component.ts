import { Component } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Shop Stalls';

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un correo';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}
