import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { ProdutService } from 'src/app/services/produt.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  
  name= new FormControl 
  price= new FormControl 
  quantity= new FormControl 
 
  constructor(private product:ProdutService) { }

  ngOnInit(): void {
  }
  
  createProduct(){
    console.log(this.buidObject());
    
   this.product.addProduct(this.buidObject()).subscribe(
     response => console.log(response)
   )
  }

  buidObject(){
    return {
      product_type_id:1,
      name:this.name.value,
      price:this.price.value,
      quantity:this.quantity.value

    }
  }

}
