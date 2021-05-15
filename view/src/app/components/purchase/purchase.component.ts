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
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  barcode:string;
  purchaseForm = this.fb.group({
    provider: [],
    code: [''],
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
    private httpPurchaseItem: HttpPurchaseDetailService,
    private dialog: MatDialog) {
    this.code.valueChanges
      .pipe(
        debounceTime(350)
      )
      .subscribe(
        value => {
          this.barcode = value;
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

  getProduct(barcode: string) {
    this.httpProduct.getProductByBarcode(barcode).subscribe(
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
        subtotal: 1
      }
      this.purchaseItems.push(this.purchaseItem);
      this.purchaseItems = this.purchaseItems.slice();
      console.log(this.purchaseItems);
    }
  }

  removeProduct(productId:number) {
    /* //Approach to dynamic quantity and subtotal
    this.purchaseItems.find(element => element.id == clickedId);
    this.purchaseItems.findIndex(element => element.id == clickedId);*/
    this.purchaseItems = this.purchaseItems.filter(element => element.product.id != productId);
  }

  createPurchase() {
    this.httpPurchaseItem.addPurchaseProducts(this.purchaseItems, this.purchase.id).subscribe(
      res => {
        console.log(res)
        this.router.navigate([`purchases/${this.purchase.id}`]);
      },
      err => console.error(err)
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      height: '95%',
      width: '95%',
    });
  }

  get code() {
    return this.purchaseForm.get('code');
  }

  get quantity() {
    return this.purchaseForm.get('quantity');
  }
}