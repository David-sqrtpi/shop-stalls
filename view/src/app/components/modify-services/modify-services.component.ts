import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpServicesService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './modify-services.component.html',
  styleUrls: ['./modify-services.component.css']
})
export class ModifyServicesComponent implements OnInit {
  
  id = new FormControl
  name_service=new FormControl 
  price=new FormControl 
  characteristics=new FormControl 
  
  constructor(private services:HttpServicesService  ) { }

  ngOnInit(): void {
  
  }

    modifyService() {
      console.log(this.buidObject());
    
   this.services.modifyServices(this.buidObject()).subscribe(
     response => console.log(response)
   )

   }

   
    buidObject(){
      return {
        id : this.id.value,
        name_service:this.name_service.value,
        price:this.price.value,
        characteristics:this.characteristics.value,
  
      }
    }
  }
