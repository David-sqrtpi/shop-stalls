import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/models/inventory';
import { HttpInventoryService } from 'src/app/services/http-inventory.service';
import { HttpProdutService } from '../../services/produt.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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
    this.router.navigate([`products/${row['id']}`]);
    console.log(row);
  }

}