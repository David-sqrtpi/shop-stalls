import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inventory } from 'src/app/models/inventory';
import { HttpInventoryService } from 'src/app/services/http-inventory.service';
import { HttpProdutService } from '../../services/produt.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() id: string = this.route.snapshot.params['id'];
  product: Inventory;

  constructor(private http: HttpProdutService,
    private route: ActivatedRoute,
    private inventoryService: HttpInventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getOne(this.id).subscribe(
      inventory => this.product = inventory,
      err => console.warn(err)
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