import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';
import { Location } from '@angular/common';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {

  waiting: boolean = false;
  id: number;

  itemForm = this.fb.group({
    id: ['', Validators.required],
    quantity: ['', Validators.required]
  });

  constructor(private http: HttpInvoiceService,
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location) {
    this.itemForm.get('id').valueChanges
      .pipe(
        debounceTime(350)
      )
      .subscribe(
        value => {
          this.id = value;
        }
      );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.waiting = true;
    this.http.addProduct(this.router.snapshot.params['id'], this.itemForm.get('id').value, this.itemForm.get('quantity').value).subscribe(
      res => {
        this.waiting = false;
        console.log(res);
        this.location.back();
      },
      err => {
        this.waiting = false;
        console.log(err);
      }
    )
  }

}
