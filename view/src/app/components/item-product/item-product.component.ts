import { Component, OnInit } from '@angular/core';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {

  constructor(private http:HttpInvoiceService) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.http.addProduct(10, 3, 4).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
