import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceDetail } from 'src/app/models/invoice-detail';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})

export class InvoiceDetailComponent implements OnInit {

  invoiceId:number = this.router.snapshot.params['id'];
  invoice: Invoice = null;
  items:InvoiceDetail[];
  displayedColumns: string[] = ['product', 'quantity', 'price', 'subtotal'];

  
  constructor(private http: HttpInvoiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getInvoice(this.invoiceId).subscribe(
      res => {
        this.invoice = res;
        this.items = this.invoice.items;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
