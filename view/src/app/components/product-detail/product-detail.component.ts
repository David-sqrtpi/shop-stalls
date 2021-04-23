import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpProdutService } from '../../services/produt.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private id:number = this.route.snapshot.params['id'];  

  constructor(private http:HttpProdutService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.http.getProductById(this.id).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.warn(err);
      }
    )
  }

}
