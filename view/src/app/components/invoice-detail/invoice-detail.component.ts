import { Component, OnInit } from '@angular/core';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  constructor(private http:HttpInvoiceService) { }

  ngOnInit(): void {
  }

}
