import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { HttpProdutService } from '../../services/produt.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() id: string = this.route.snapshot.params['id'];
  product: Product;

  constructor(private http: HttpProdutService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getProductByBarcode(this.id).subscribe(
      res => {
        this.product = res;
        console.log(res);
      },
      err => {
        this.product = null;
        console.warn(err);
      }
    );
  }

  deleteProduct() {
    this.http.deleteProduct(this.id).subscribe(
      () => {
        console.log("deleted");
        window.location.reload();
      },
      err => console.warn(err)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      this.ngOnInit(); //Because there are only one item property
    }
  }

  modifyProduct() {

  }
}