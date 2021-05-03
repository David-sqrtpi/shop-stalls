import { Component, OnInit } from '@angular/core';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';

@Component({
  selector: 'app-item-service',
  templateUrl: './item-service.component.html',
  styleUrls: ['./item-service.component.css']
})
export class ItemServiceComponent implements OnInit {

  constructor(private http:HttpInvoiceService) { }

  ngOnInit(): void {
  }

  addService() {

  }

}
