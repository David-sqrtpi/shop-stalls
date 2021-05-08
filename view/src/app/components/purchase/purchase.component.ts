import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { Supplier } from 'src/app/models/Supplier';
import { HttpSupplierService } from 'src/app/services/http-supplier.service';
import { HttpProdutService } from 'src/app/services/produt.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchaseForm = this.fb.group({
    code: [''],
    provider: []
  });

  suppliers: Supplier[];
  products: Product[] = new Array;
  retrievedProduct: Product;

  constructor(private http: HttpSupplierService,
    private httpProduct: HttpProdutService,
    private fb: FormBuilder) {
    this.code.valueChanges
      .pipe(
        debounceTime(350)
      )
      .subscribe(
        value => value ? this.getProduct(value) : null
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
        console.log(res);
        this.retrievedProduct = res;
      }
    )
  }

  addProduct() {
    if (this.retrievedProduct) {
      this.products.push(this.retrievedProduct);
      this.retrievedProduct = null;
    }
  }

  removeProduct() {
  }

  get code() {
    return this.purchaseForm.get('code');
  }
}
