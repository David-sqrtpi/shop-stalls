import { Component, OnInit } from '@angular/core';
import { HttpProdutService } from '../../services/produt.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any;

  displayedColumns: string[] = ['name', 'price', 'quantity'];

  constructor (private http:HttpProdutService) {

  }

  ngOnInit(): void {
    this.http.getAllProducts().subscribe(
      res=>{
        console.log(res);
        this.products = res;
      }
    );
  }

  onClick(row:any){
    console.log(row);
  }

}