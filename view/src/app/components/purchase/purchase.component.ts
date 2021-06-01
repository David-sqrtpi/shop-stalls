import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { Supplier } from 'src/app/models/Supplier';
import { HttpSupplierService } from 'src/app/services/http-supplier.service';
import { HttpProdutService } from 'src/app/services/produt.service';
import { debounceTime } from 'rxjs/operators';
import { HttpPurchaseService } from 'src/app/services/http-purchase.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { PurchaseItem } from 'src/app/models/purchase-item';

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
      id: [, Validators.required]
    }),
    date: [],
    amountToPay: [0],
    products: this.fb.array([])
  });

  displayedColumns: string[] = ['name', 'quantity', 'price', 'subtotal', 'x'];

  suppliers: Supplier[];
  retrievedProduct: Product;

  constructor(private supplierService: HttpSupplierService,
    private productService: HttpProdutService,
    private fb: FormBuilder,
    private purchaseService: HttpPurchaseService,
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
    console.log(this.purchaseForm.value);
    this.purchaseService.create({id:null}).subscribe(
      purchase => this.purchaseForm.get('id').setValue(purchase.id)
    );

    this.supplierService.getAll().subscribe(
      res => {
        this.suppliers = res;
      },
      err => console.error(err)
    );
  }

  public isWaiting: Boolean = false;

  getProduct(barcode: string) {
    this.isWaiting = true;
    this.productService.getProductByBarcode(barcode).subscribe(
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
    if (!this.products.value
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
      console.log(this.products.value);
      this.table.renderRows();
    }
  }

  removeProduct(id: number) {
    this.products.value.find(element => element.product.id == id).product.id = -1;
    this.products.setValue(this.products.value);
    this.table.renderRows();
  }

  createPurchase() {
    if (this.purchaseForm.invalid || !this.products.value.length) {
      alert('Faltan datos');
      throw new Error("Incomplete data");
    }

    this.code.setValidators(Validators.nullValidator);
    this.code.setValue('');

    this.isWaiting = true;

    this.purchaseForm.get('date').setValue(new Date());

    let purchaseDetails: PurchaseItem[] = this.products.value.filter(product => product.product.id != -1);

    this.purchaseService.create(this.purchaseForm.value).subscribe(
      () => {
        this.purchaseService.addPurchaseProducts(purchaseDetails, this.purchaseForm.get('id').value).subscribe(
          () => {
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
}