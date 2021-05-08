import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpProdutService } from '../../services/produt.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any;

  displayedColumns: string[] = ['name', 'price', 'quantity'];

  constructor (private http:HttpProdutService,
    private router:Router) {

  }

  ngOnInit(): void {
    this.http.getProducts().subscribe(
      res=>{
        console.log(res);
        this.products = res;
      }
    );
  }

  onClick(row:any){
    this.router.navigate([`products/${row['id']}`]);
    console.log(row);
  }

}