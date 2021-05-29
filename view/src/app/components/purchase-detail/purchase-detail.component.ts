import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from 'src/app/models/purchase';
import { HttpPurchaseService } from 'src/app/services/http-purchase.service';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})

export class PurchaseDetailComponent implements OnInit {
  id: number = this.route.snapshot.params['id'];
  purchase: Purchase;

  constructor(private http: HttpPurchaseService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getPurchase(this.id).subscribe(
      res => {
        this.purchase = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }
}