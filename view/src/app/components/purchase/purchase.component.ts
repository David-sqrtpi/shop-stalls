import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { Supplier } from 'src/app/models/Supplier';
import { HttpSupplierService } from 'src/app/services/http-supplier.service';
import { HttpProdutService } from 'src/app/services/produt.service';
import { debounceTime } from 'rxjs/operators';
import { PurchaseItem } from 'src/app/models/purchase-item';
import { HttpPurchaseService } from 'src/app/services/http-purchase.service';
import { Router } from '@angular/router';
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

  purchaseForm = this.fb.group({
    id: [],
    supplier: this.fb.group({
      id: ['', Validators.required]
    }),
    date: [],
    amountToPay: [0],
    products: this.fb.array([])
  });

  displayedColumns: string[] = ['name', 'quantity', 'price', 'subtotal', 'x'];

  suppliers: Supplier[];
  retrievedProduct: Product;

  constructor(private http: HttpSupplierService,
    private httpProduct: HttpProdutService,
    private fb: FormBuilder,
    private httpPurchase: HttpPurchaseService,
    private router: Router,
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
    this.httpPurchase.create(this.purchaseForm.value).subscribe(
      purchase => this.purchaseForm.get('supplier.id').setValue(purchase.id)
    );

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
    if (!this.itemsValue.value
      .some(
        element => element.product.id == this.retrievedProduct.id
      ) && this.retrievedProduct
    ) {
      this.products.push(
        this.fb.group({
          quantity: [1, [Validators.required, Validators.min(1)]],
          price: [1, [Validators.required, Validators.min(1)]],
          product: this.fb.group({
            id: this.retrievedProduct.id,
            name: this.retrievedProduct.name,
          }),
          purchase: this.purchaseForm.value
        })
      );
      console.log(this.itemsValue.value);
      this.table.renderRows();
    }
  }

  removeProduct(id: number) {
    this.itemsValue.value.find(element => element.product.id == id).product.id = -1;
    this.table.renderRows();
  }

  createPurchase() {
    if (this.purchaseForm.invalid || !this.itemsValue.value.length) {
      alert('Faltan datos');
      throw new Error("Incomplete data");
    }

    this.code.setValidators(Validators.nullValidator);
    this.code.setValue('');

    this.isWaiting = true;

    this.purchaseForm.get('date').setValue(new Date());

    this.httpPurchase.create(this.purchaseForm.value).subscribe(
      purchase => {
        this.httpPurchase.addPurchaseProducts(this.itemsValue.value, this.purchaseForm.get('id').value).subscribe(
          res => {
            this.router.navigate([`purchases/${this.purchaseForm.get('id').value}`]);
          },
          err => {
            console.error(err);
            this.isWaiting = false;
            alert('Ha ocurrido un error');
          }
        );
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

  get products(): FormArray {
    return this.purchaseForm.get('products') as FormArray;
  }

  get itemsValue() {
    return this.purchaseForm.get('products');
  }
}