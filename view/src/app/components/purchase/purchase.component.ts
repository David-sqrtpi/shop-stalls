import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  @ViewChild('table') private table;
  barcode: string;

  code = new FormControl('', Validators.required);

  form = this.fb.group({
    items: this.fb.array([]),
    provider: ['', Validators.required]
  });

  displayedColumns: string[] = ['name', 'quantity', 'price', 'subtotal', 'x'];

  // purchase: Purchase;
  suppliers: Supplier[];
  retrievedProduct: Product;
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
    this.http.getAll().subscribe(
      res => {
        this.suppliers = res;
      },
      err => console.error(err)
    );
  }

  public isWaiting: Boolean = false;

  getProduct(barcode: string) {
    this.isWaiting = true;
    this.httpProduct.getProductByBarcode(barcode).subscribe(
      res => {
        this.retrievedProduct = res;
        this.isWaiting = false;
      },
      err => {
        console.error(err);
        this.isWaiting = false;
        this.retrievedProduct = null;
      }
    )
  }

  addProduct() {
    if (!this.purchaseItems
      .some(
        element => element.product.barcode == this.retrievedProduct.barcode
      ) && this.retrievedProduct
    ) {
      this.items.push(this.fb.group({
        quantity: [1, [Validators.required, Validators.min(1)]],
        price: [1, [Validators.required, Validators.min(1)]],
        purchase: this.fb.group({
          id: [this.purchase.id]
        }),
        product: this.fb.group({
          barcode: [this.retrievedProduct.barcode],
          namer: [this.retrievedProduct.name],
          company: this.fb.group({
            id: [this.retrievedProduct.company.id]
          })
        })
      }));
      this.purchaseItems = this.items.value;
      this.table.renderRows();
    }
  }

  removeProduct(barcode: string) {
    this.purchaseItems.find(element => element.product.barcode == barcode).product.barcode = '-1';
    this.items.setValue(this.purchaseItems);
    this.table.renderRows();
  }

  createPurchase() {
    if (this.form.invalid || !this.items.length) {
      alert('Faltan datos');
      throw new Error("Incomplete data");
    }

    let purchase: Purchase = this.buildPurchase();
    this.httpPurchase.create(purchase).subscribe();

    this.code.setValidators(Validators.nullValidator);
    this.code.setValue('');

    this.isWaiting = true;
    
    this.purchaseItems = this.items.value;
    this.purchaseItems = this.purchaseItems.filter(element => element.product.barcode != '-1');
    console.log(this.purchaseItems);
    this.httpPurchaseItem.addPurchaseProducts(this.purchaseItems, this.purchase.id).subscribe(
      res => {
        console.log(res)
        this.router.navigate([`purchases/${this.purchase.id}`]);
      },
      err => {
        console.error(err);
        this.isWaiting = false;
        alert('Ha ocurrido un error');
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '95%',
      data: { code: this.code.value }
    });

    dialogRef.afterClosed().subscribe(
      res => {
        this.code.setValidators(Validators.nullValidator);
        this.code.setValue("");
        if (res) {
          setTimeout(() => {
            this.code.setValidators(Validators.required);
            this.code.setValue(res);
          }, 350);
        }
      }
    );
  }

  buildPurchase(): Purchase {
    let purchase: Purchase = {
      date: new Date(),
      supplier: {
        id: this.provider.value
      }
    }
    return purchase;
  }

  toPurchaseItemArray():PurchaseItem[] {

  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  get provider() {
    return this.form.get('provider');
  }
}