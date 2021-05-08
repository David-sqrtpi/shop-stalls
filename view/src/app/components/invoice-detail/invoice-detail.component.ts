import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})

export class InvoiceDetailComponent implements OnInit {

  invoiceId:number = this.router.snapshot.params['id'];
  invoice: object = null;
  items:object;
  displayedColumns: string[] = ['product', 'quantity', 'price', 'subtotal'];

  
  constructor(private http: HttpInvoiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getInvoice(this.invoiceId).subscribe(
      res => {
        this.invoice = res;
        console.log(res);
        
      },
      err => {
        console.log(err);
      }
    );

    this.http.getInvoice(this.invoiceId).subscribe(
      res => {
        this.items = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
