
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { HttpProdutService } from 'src/app/services/produt.service';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  id = new FormControl
  name = new FormControl
  price = new FormControl
  quantity = new FormControl


  constructor(private product: HttpProdutService) { }

  ngOnInit(): void {

  }

  modifyProduct() {
    console.log(this.buidObject());

    //this.product.modifyProduct(this.buidObject()).subscribe(
      //response => console.log(response)
    //)

  }


  buidObject() {
    return {
      id: this.id.value,
      product_type_id: 1,
      name: this.name.value,
      price: this.price.value,
      quantity: this.quantity.value

    }
  }
}


