import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/Supplier';
import { HttpSupplierService } from 'src/app/services/http-supplier.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  suppliers:Supplier[];

  constructor(private http:HttpSupplierService) { }

  ngOnInit(): void {
    this.http.getAll().subscribe(
      res => {
        this.suppliers = res;
        console.log(res);        
      },
      err => console.error(err)
    )
  }

}
