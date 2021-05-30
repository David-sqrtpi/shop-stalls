import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceDetail } from 'src/app/models/invoice-detail';
import { HttpInventoryService } from 'src/app/services/http-inventory.service';
import { Inventory } from 'src/app/models/inventory';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  @ViewChild('table') private table;
  invoice: Invoice;
  barcode: string;

  barcodeInput = new FormControl('', Validators.required);

  form = this.fb.group({
    dni: ['', Validators.required],
    clientName: ['', Validators.required],
    items: this.fb.array([])
  });

  displayedColumns: string[] = ['name', 'quantity', 'price', 'subtotal', 'x'];
  retrievedInventory: Inventory;
  retrievedProduct: Product;
  invoiceItems: InvoiceDetail[] = [];
  isWaiting: boolean = false;

  constructor(private inventoryService: HttpInventoryService,
    private fb: FormBuilder,
    private router: Router,
    private invoiceService: HttpInvoiceService) {
    this.barcodeInput.valueChanges
      .pipe(debounceTime(350))
      .subscribe(
        value => {
          this.barcode = value;
          this.retrievedProduct = null;
          this.getProduct(value)
        }
      );
  }

  ngOnInit(): void {
    this.invoiceService.create().subscribe(
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
    this.isWaiting = true;
    this.inventoryService.getOne(barcode).subscribe(
      inventory => {
        this.isWaiting = false;
        try {
          this.retrievedInventory = inventory;
          this.retrievedProduct = inventory.product;
        } catch (error) {
        }
      },
      err => {
        this.isWaiting = false;
        console.error(err);
        this.retrievedProduct = null;
      }
    );
  }

  onSubmit() {
    if (!this.invoiceItems
      .some(
        element => element.product.barcode == this.retrievedProduct.barcode
      ) && this.retrievedProduct
    ) {
      this.items.push(this.fb.group({
        quantity: [1, [Validators.required, Validators.min(1), Validators.max(this.retrievedInventory.quantity)]],
        price: this.retrievedInventory.salePrice,
        invoice: this.fb.group({
          id: this.invoice.id
        }),
        product: this.fb.group({
          barcode: [this.retrievedProduct.barcode],
          namer: [this.retrievedProduct.name],
          company: this.fb.group({
            id: [this.retrievedProduct.company.id]
          })
        })
      }));
      this.invoiceItems = this.items.value;
      this.table.renderRows();
    }
  }

  removeProduct(barcode: string) {
    this.invoiceItems.find(element => element.product.barcode == barcode).product.barcode = '-1';
    this.items.setValue(this.invoiceItems);
    this.table.renderRows();
  }

  createInvoice() {
    this.isWaiting = true;
    if (this.form.invalid || !this.items.length) {
      alert("Faltan datos");
      throw new Error("Incomplete data");
    }

    this.invoice.clientName = this.form.get('clientName').value;
    this.invoice.dni = this.form.get('dni').value;
    this.invoice.date = new Date;
    this.invoiceService.modify(this.invoice).subscribe(
      () => {
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
    );

  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
}
