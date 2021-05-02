import { Component, OnInit } from '@angular/core';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';
import { HttpUserServiceService } from 'src/app/services/http-user-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = null;

  constructor(private http: HttpUserServiceService, private httpInvoice:HttpInvoiceService) { }

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

  createInvoice(){
    this.httpInvoice.create().subscribe(
      res => {
        console.log("Invoice created");
      },
      err => {
        console.log(err);
      }
    )
  }

}
