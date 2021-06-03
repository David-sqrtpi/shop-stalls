import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  localStorage: string;

  ngOnInit(): void {
    this.localStorage = localStorage.getItem("token");
  }

  logOut(): void {
    location.reload();
    localStorage.clear();
  }

}
