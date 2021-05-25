import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { HttpProdutService } from 'src/app/services/produt.service';
import { debounceTime } from 'rxjs/operators';
import { Purchase } from 'src/app/models/purchase';
import { Router } from '@angular/router';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceDetail } from 'src/app/models/invoice-detail';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  @ViewChild('table') private table;
  invoice: Invoice;
  barcode: string;

  invoiceForm = this.fb.group({
    dni: ['', Validators.required],
    clientName: ['', Validators.required]
  });

  barcodeInput = new FormControl('', Validators.required);

  form = this.fb.group({
    items: this.fb.array([])
  });

  displayedColumns: string[] = ['name', 'quantity', 'price', 'subtotal', 'x'];

  retrievedProduct: Product;
  invoiceItems:InvoiceDetail[] = [];

  constructor(private httpProduct: HttpProdutService,
    private fb: FormBuilder,
    private httpInvoice: HttpInvoiceService,
    private router: Router,
    private invoiceService:HttpInvoiceService) {
    this.barcodeInput.valueChanges
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
      invoice => {
        this.invoice = invoice
        console.log(invoice);
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
    if (!this.invoiceItems
      .some(
        element => element.product.barcode == this.retrievedProduct.barcode
      ) && this.retrievedProduct
    ) {
      this.items.push(this.fb.group({
        quantity: [1, [Validators.required, Validators.min(1)]],
        price: 999,
        invoice: this.fb.group({
          id: [this.invoice.id]
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
      this.invoiceItems = this.items.value;
      console.log(this.invoiceItems);
    }
  }

  removeProduct(barcode: string) {
    this.invoiceItems.find(element => element.product.barcode == barcode).product.barcode = '-1';
    this.items.setValue(this.invoiceItems);
    this.table.renderRows();
  }

  createInvoice() {
    this.invoiceItems = this.items.value;
    this.invoiceItems = this.invoiceItems.filter(element => element.product.barcode != '-1');
    console.log(this.invoiceItems);
    this.invoiceService.addInvoiceDetails(this.invoiceItems, this.invoice.id).subscribe(
      res => {
        console.log(res)
        this.router.navigate([`invoices/${this.invoice.id}`]);
      },
      err => console.error(err)
    );
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
}
