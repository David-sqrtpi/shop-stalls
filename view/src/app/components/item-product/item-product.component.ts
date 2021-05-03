import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {
  
  itemForm = this.fb.group({
    id: ['', Validators.required],
    quantity: ['', Validators.required]
  });

  constructor(private http:HttpInvoiceService,
    private router:ActivatedRoute,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.addProduct(this.router.snapshot.params['id'], this.itemForm.get('id').value, this.itemForm.get('quantity').value).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
