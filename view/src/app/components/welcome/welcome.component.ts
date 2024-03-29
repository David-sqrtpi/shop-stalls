import { Component, OnInit } from '@angular/core';
import { HttpUserServiceService } from 'src/app/services/http-user-service.service';
import { retry } from 'rxjs/operators'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = null;
  constructor(private http: HttpUserServiceService) { }

  ngOnInit(): void {
    if (localStorage.getItem('userId')) {
      this.name = localStorage.getItem('name');
    }
    else {
      this.showUsername();
      location.reload();
    }
  }

  showUsername() {
    this.http.getUserByEmail(localStorage.getItem("email")).subscribe(
      result => {
        this.name = result["name"];
        localStorage.setItem('userId', result['id']);
        localStorage.setItem('name', result['name']);
        localStorage.setItem('company', result['company']['id']);
        localStorage.removeItem('email');
      }
    );
  }

}