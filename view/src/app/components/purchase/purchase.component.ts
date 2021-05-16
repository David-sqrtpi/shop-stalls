import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  @ViewChild ('table') private table;

  barcode: string;
  purchaseForm = this.fb.group({
    provider: [],
    code: [''],
  });

  form = this.fb.group({
    items: this.fb.array([])
  });

  displayedColumns: string[] = ['name', 'quantity', 'price', 'subtotal', 'x'];

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  purchase: Purchase;
  suppliers: Supplier[];
  retrievedProduct: Product;
  purchaseItem: PurchaseItem;

  purchaseItems: PurchaseItem[] = [];

  constructor(private http: HttpSupplierService,
    private httpProduct: HttpProdutService,
    private fb: FormBuilder,
    private httpPurchase: HttpPurchaseService,
    private router: Router,
    private httpPurchaseItem: HttpPurchaseDetailService,
    private dialog: MatDialog) {
    this.code.valueChanges
      .pipe(debounceTime(350))
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
    );
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
    this.items.push(this.fb.group({
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [1, [Validators.required, Validators.min(1)]],
      product: this.fb.group({
        barcode: ['this.retrievedProduct.barcode'],
        name: ['Strong typed product'],
        company: this.fb.group({
          id: ['this.retrievedProduct.company.id']
        })
      })
    }));
    this.table.renderRows();
  }

  // removeProduct(productId:number) {
  //   this.purchaseItems = this.purchaseItems.filter(element => element.product.id != productId);
  // }

  // createPurchase() {
  //   this.httpPurchaseItem.addPurchaseProducts(this.purchaseItems, this.purchase.id).subscribe(
  //     res => {
  //       console.log(res)
  //       this.router.navigate([`purchases/${this.purchase.id}`]);
  //     },
  //     err => console.error(err)
  //   );
  // }

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