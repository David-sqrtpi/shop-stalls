import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpProdutService } from '../../services/produt.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() id: number = this.route.snapshot.params['id'];

  public product: object = null;

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
      () => {
        console.log("deleted");
        window.location.reload();
      },
      err => console.warn(err)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes[propName].currentValue) {
        this.ngOnInit();
      }
    }
  }

  modifyProduct() {

  }
}
