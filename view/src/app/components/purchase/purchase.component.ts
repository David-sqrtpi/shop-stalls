import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { Supplier } from 'src/app/models/Supplier';
import { HttpSupplierService } from 'src/app/services/http-supplier.service';
import { HttpProdutService } from 'src/app/services/produt.service';
import { debounceTime } from 'rxjs/operators';
import { PurchaseItem } from 'src/app/models/purchase-item';
import { Purchase } from 'src/app/models/purchase';
import { HttpPurchaseService } from 'src/app/services/http-purchase.service';
import { Router } from '@angular/router';
import { HttpPurchaseDetailService } from 'src/app/services/http-purchase-detail.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  idProd: number = 0;

  purchaseForm = this.fb.group({
    code: [''],
    provider: [],
    quantity: ['']
  });

  purchase: Purchase;
  suppliers: Supplier[];
  purchaseItems: PurchaseItem[] = new Array;
  retrievedProduct: Product;
  purchaseItem: PurchaseItem;

  constructor(private http: HttpSupplierService,
    private httpProduct: HttpProdutService,
    private fb: FormBuilder,
    private httpPurchase: HttpPurchaseService,
    private router: Router,
    private httpPurchaseItem: HttpPurchaseDetailService) {
    this.code.valueChanges
      .pipe(
        debounceTime(350)
      )
      .subscribe(
        value => {
          this.idProd = value;
          this.getProduct(value)
        }
      );
  }

  ngOnInit(): void {
    this.httpPurchase.createPurchase().subscribe(
      res => this.purchase = res,
      err => console.error(err)
    );
    this.http.getAll().subscribe(
      res => {
        this.suppliers = res;
      },
      err => console.error(err)
    )
  }

  getProduct(id: number) {
    this.httpProduct.getProductById(id).subscribe(
      res => {
        this.retrievedProduct = res;
      },
      err => {
        console.error(err);
        this.retrievedProduct = null;
      }
    )
  }

  addProduct() {
    if (!this.purchaseItems
      .some(
        element => element.product.id == this.retrievedProduct.id
      ) && this.retrievedProduct
    ) {
      this.purchaseItem = {
        id: null,
        purchase: this.purchase,
        product: this.retrievedProduct,
        quantity: this.quantity.value,
        subtotal: this.quantity.value * this.retrievedProduct.price
      }
      this.purchaseItems.push(this.purchaseItem);
      this.purchaseItems = this.purchaseItems.slice();
      console.log(this.purchaseItems);
    }
  }

  removeProduct() {
  }

  createPurchase() {
    this.httpPurchaseItem.addPurchaseProducts(this.purchaseItems).subscribe(
      res => {
        console.log(res)
        this.router.navigate([`purchases/${this.purchase.id}`]);
      },
      err => console.error(err)
    );
  }

  something(quantity) {
    console.log(quantity);
  }

  get code() {
    return this.purchaseForm.get('code');
  }

  get quantity() {
    return this.purchaseForm.get('quantity');
  }
}