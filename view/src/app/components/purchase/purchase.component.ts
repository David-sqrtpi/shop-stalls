import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { Supplier } from 'src/app/models/Supplier';
import { HttpSupplierService } from 'src/app/services/http-supplier.service';
import { HttpProdutService } from 'src/app/services/produt.service';
import { debounceTime } from 'rxjs/operators';
import { PurchaseItem } from 'src/app/models/purchase-item';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  @ViewChild('table') private table;
  idProd:number = 0;
  
  purchaseForm = this.fb.group({
    code: [''],
    provider: []
  });

  displayedColumns: string[] = ['name', 'price', 'quantity'];
  suppliers: Supplier[];
  purchaseItems: PurchaseItem[] = new Array;
  retrievedProduct: Product;
  purchaseItem: PurchaseItem;

  constructor(private http: HttpSupplierService,
    private httpProduct: HttpProdutService,
    private fb: FormBuilder) {
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
    this.http.getAll().subscribe(
      res => {
        this.suppliers = res;
        console.log(res);
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
    if (this.retrievedProduct) {
      this.purchaseItem = {
        id: null,
        purchase: null,
        product: this.retrievedProduct,
        quantity: 1,
        subtotal: 1 * this.retrievedProduct.price
      }
      console.log(this.purchaseItem);
      this.purchaseItems.push(this.purchaseItem);
      try {
        this.table.renderRows();
      } catch (error) {

      }
      this.retrievedProduct = null;
    }
  }

  removeProduct() {
  }

  get code() {
    return this.purchaseForm.get('code');
  }
}