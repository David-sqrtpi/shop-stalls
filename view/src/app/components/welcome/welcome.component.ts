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
        console.log(result);
        this.name = result["name"];
        localStorage.setItem('company', result['company']['id']);
      }
    );
  }

  logOut(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  }

}
