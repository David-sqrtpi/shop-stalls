import { Component, OnInit } from '@angular/core';
import { HttpUserServiceService } from 'src/app/services/http-user-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = null;

  constructor(private http:HttpUserServiceService) { }

  ngOnInit(): void {
    this.http.getUser(localStorage.getItem("email")).subscribe(
      result => {
        this.name = result["name"];
        localStorage.setItem('id_company', result['id_company']);
      }
    );
  }

  logOut(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  }

}
