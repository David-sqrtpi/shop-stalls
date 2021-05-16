import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseItem } from 'src/app/models/purchase-item';
import { HttpPurchaseService } from 'src/app/services/http-purchase.service';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit, OnChanges {
  @Input() purchaseItems: PurchaseItem[];
  @Output() event = new EventEmitter<number>();
  @Output() quantityEvent = new EventEmitter<number[]>();
  @ViewChild('table') private table;
  @ViewChild('element') public element;

  quantityInput = new FormControl(1, [Validators.required, Validators.min(1)]);
  displayedColumns: string[]
  id: number = this.route.snapshot.params['id'];
  purchase: Purchase;
  currProdId:number;

  constructor(private http: HttpPurchaseService,
    private route: ActivatedRoute) {
      this.quantityInput.valueChanges
      .pipe(debounceTime(250))
      .subscribe(
        res => {
          this.emitQuantity(res);
        }
      );

      if(!this.id) {
        this.displayedColumns = ['name', 'quantity', 'price', 'subtotal', 'x'];
      } else {
        this.displayedColumns = ['name', 'quantity', 'price', 'subtotal'];
      }
    }

  ngOnChanges(changes: SimpleChanges): void {
    try {
      this.table.renderRows();      
    } catch (error) {
    }
  }

  ngOnInit(): void {
    this.http.getPurchase(this.id).subscribe(
      res => {
        console.log(res);
        this.purchase = res;
        this.purchaseItems = res.products;
      },
      err => console.error(err)
    );
  }

  delete(productId:number) {
    this.event.emit(productId);
  }

  doSome(row:any) {
    this.currProdId = row.product.id;
  }

  emitQuantity(quantity:number){
    let idQuan = [this.currProdId, quantity];
    this.quantityEvent.emit(idQuan);
  }
}