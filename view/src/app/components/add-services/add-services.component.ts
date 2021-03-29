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

  name_service=new FormControl 
  price=new FormControl 
  characteristics=new FormControl 
  
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
        
        name_service:this.name_service.value,
        price:this.price.value,
        characteristics:this.characteristics.value,
  
      }
    }
  }
