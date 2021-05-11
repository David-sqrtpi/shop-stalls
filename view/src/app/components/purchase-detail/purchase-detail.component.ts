import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseItem } from 'src/app/models/purchase-item';
import { HttpPurchaseService } from 'src/app/services/http-purchase.service';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit, OnChanges {
  @Input() purchaseItems: PurchaseItem[];
  @Output() event = new EventEmitter<number>();
  @Output() quantityEvent = new EventEmitter<number>();
  @ViewChild('table') private table;
  
  quantityInput = new FormControl(1, [Validators.required, Validators.min(1)]);

  id: number = this.route.snapshot.params['id'];

  displayedColumns: string[] = ['name', 'quantity', 'price', 'subtotal', 'x'];
  purchase: Purchase;
  constructor(private http: HttpPurchaseService,
    private route: ActivatedRoute) {
      this.quantityInput.valueChanges.subscribe(
        res => this.inputChange(res)
      );
    }

  ngOnChanges(changes: SimpleChanges): void {
    try {
      this.table.renderRows();      
    } catch (error) {
    }
  }

  ngOnInit(): void {
    this.http.getPurchase(this.id).subscribe(
      res => this.purchaseItems = res,
      err => console.error(err)
    );
  }

  delete(productId:number) {
    this.event.emit(productId);
  }

  inputChange(id:number){

  }
}