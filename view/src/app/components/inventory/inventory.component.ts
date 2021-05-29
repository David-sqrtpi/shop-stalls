import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/models/inventory';
import { HttpInventoryService } from 'src/app/services/http-inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {

  inventory: Inventory[];

  displayedColumns: string[] = ['barcode', 'name', 'quantity', 'purchasePrice', 'salePrice'];

  constructor(private http: HttpInventoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.http.getInventory().subscribe(
      res => {
        console.log(res);
        this.inventory = res;
      }
    );
  }

  onClick(row: any) {
    //this.router.navigate([`inventory/${row['id']}`]);
    
  }

}