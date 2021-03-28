import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { ServicesService } from 'src/app/services/services.service';

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
  httpClient: any;

 
  
  constructor(private services:ServicesService) { }

  ngOnInit(): void {
  
  }

    createService() {
      console.log(this.buidObject());
    
   this.services.addServices(this.buidObject()).subscribe(
     response => console.log(response)
   )

   }

   
    buidObject(){
      return {
        id:this.id.value,
        name_service:this.name_service.value,
        price:this.price.value,
        Characteristics:this.Characteristics.value,
  
      }
    }
  }
