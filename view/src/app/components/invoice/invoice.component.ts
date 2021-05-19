import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { HttpSupplierService } from 'src/app/services/http-supplier.service';
import { HttpProdutService } from 'src/app/services/produt.service';
import { debounceTime } from 'rxjs/operators';
import { PurchaseItem } from 'src/app/models/purchase-item';
import { Purchase } from 'src/app/models/purchase';
import { Router } from '@angular/router';
import { HttpPurchaseDetailService } from 'src/app/services/http-purchase-detail.service';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  @ViewChild('table') private table;

  barcode: string;
  invoiceForm = this.fb.group({
    code: [''],
  });

  form = this.fb.group({
    items: this.fb.array([])
  });

  displayedColumns: string[] = ['name', 'quantity', 'price', 'subtotal', 'x'];

  purchase: Purchase;
  retrievedProduct: Product;
  purchaseItems: PurchaseItem[] = [];

  constructor(private http: HttpSupplierService,
    private httpProduct: HttpProdutService,
    private fb: FormBuilder,
    private httpInvoice: HttpInvoiceService,
    private router: Router,
    private httpPurchaseItem: HttpPurchaseDetailService) {
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
    this.httpInvoice.create().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
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

  onSubmit() {
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
      this.table.renderRows();
      this.purchaseItems = this.items.value;
      console.log(this.purchaseItems);
    }
  }

  removeProduct(barcode: string) {
    this.purchaseItems.find(element => element.product.barcode == barcode).product.barcode = '-1';
    this.items.setValue(this.purchaseItems);
    this.table.renderRows();
  }

  createPurchase() {
    this.purchaseItems = this.items.value;
    this.purchaseItems = this.purchaseItems.filter(element => element.product.barcode != '-1');
    console.log(this.purchaseItems);
    this.httpPurchaseItem.addPurchaseProducts(this.purchaseItems, this.purchase.id).subscribe(
      res => {
        console.log(res)
        this.router.navigate([`purchases/${this.purchase.id}`]);
      },
      err => console.error(err)
    );
  }

  get code() {
    return this.invoiceForm.get('code');
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
}
