import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  id= new FormControl 
 
  name= new FormControl 
  price= new FormControl 
  quantity= new FormControl 
 
  product:object;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
 
  
  createProduct(){
    this.product = {
      id:this.id.value,
      product_type_id:1,
      name:this.name.value,
      price:this.price.value,
      quantity:this.quantity.value
    }
    console.log(this.product);
    
   this.httpClient.post('http://localhost:8080/product/add',this.product).subscribe (
     product => console.log(product)
     
   )


  }
}
