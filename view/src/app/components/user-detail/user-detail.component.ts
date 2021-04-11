import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpUserServiceService } from 'src/app/services/http-user-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private email:string = this.route.snapshot.params['email'];  

  constructor(private http:HttpUserServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http.getUser(this.email).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.warn(err);
      }
    )
  }

}
