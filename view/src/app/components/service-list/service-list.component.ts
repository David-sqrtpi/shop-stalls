import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../../services/http.service';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services:any;

  displayedColumns: string[] = ['name', 'price', 'characteristics'];

  constructor (private http:HttpServicesService) {

  }

  ngOnInit(): void {
    this.http.getServices().subscribe(
      res=>{
        console.log(res);
        this.services = res;
      }
    );
  }

  onClick(row:any){
    console.log(row);
  }

}
