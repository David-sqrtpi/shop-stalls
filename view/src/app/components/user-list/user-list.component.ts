import { Component, OnInit } from '@angular/core';
import { HttpUserServiceService } from '../../services/http-user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any;

  company:number = +localStorage.getItem('id_company');

  displayedColumns: string[] = ['name', 'age', 'email', 'id_company'];

  constructor(private http:HttpUserServiceService) { }

  ngOnInit(): void {
    this.http.getUsers().subscribe(
      result => {
        console.log(result);
        this.users=result;
      }
    );
  }

}
