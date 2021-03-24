import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {

  id=new FormControl 
  name_service=new FormControl 
  price=new FormControl 
  Characteristics=new FormControl 

  services:object;
  
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  
  }

    createService() {
      this.services = {
        id:this.id.value,
  
        name_service:this.name_service.value,
        price:this.price.value,
        Characteristics:this.Characteristics.value,
      }

      console.log(this.services);
      
      this.httpClient.post("localhost:8080/services/add",this.services).subscribe(
       services => console.log(services)
       
      )



    }
    
    
  }



