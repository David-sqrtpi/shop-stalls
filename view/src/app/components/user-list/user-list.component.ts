import { Component, OnInit } from '@angular/core';
import { HttpCompanyService } from 'src/app/services/http-company.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any;

  displayedColumns: string[] = ['name', 'email', 'roles'];

  constructor(private http:HttpCompanyService) { }

  ngOnInit(): void {
    this.http.getUsersFromCompany(+localStorage.getItem('company')).subscribe(
      result => {
        console.log(result);
        this.users=result;
      }
    );
  }

}
