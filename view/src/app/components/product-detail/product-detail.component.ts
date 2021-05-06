import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpProdutService } from '../../services/produt.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: object = null;
  private id: number = this.route.snapshot.params['id'];

  constructor(private http: HttpProdutService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getProductById(this.id).subscribe(
      res => {
        this.product = res;
        console.log(res);
      },
      err => {
        console.warn(err);
      }
    );
  }

  deleteProduct() {
    this.http.deleteProduct(this.id).subscribe(
      () => console.log("deleted"),
      err => console.warn(err)
    );
  }

  modifyProduct() {

  }



}
