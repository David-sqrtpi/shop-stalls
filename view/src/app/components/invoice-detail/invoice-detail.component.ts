import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  invoice: object;

  constructor(private http: HttpInvoiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getInvoice(this.router.snapshot.params['id']).subscribe(
      res => {
        this.invoice = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}
