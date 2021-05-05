import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';
import { HttpUserServiceService } from 'src/app/services/http-user-service.service';
import { ClientNameFormComponent } from '../client-name-form/client-name-form.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = null;

  constructor(private http: HttpUserServiceService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    if (localStorage.getItem('userId')) {
      this.name = localStorage.getItem('name');

    }
    else {
      this.http.getUserByEmail(localStorage.getItem("email")).subscribe(
        result => {
          console.log(result);
          this.name = result["name"];
          localStorage.setItem('userId', result['id']);
          localStorage.setItem('name', result['name']);
          localStorage.setItem('company', result['companyId']);
          localStorage.removeItem('email');
        }
      );
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ClientNameFormComponent, {
      height: '200px',
      width: '300px',
    });
  }

}