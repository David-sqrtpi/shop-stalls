import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpInvoiceService } from 'src/app/services/http-invoice.service';

@Component({
  selector: 'app-client-name-form',
  templateUrl: './client-name-form.component.html',
  styleUrls: ['./client-name-form.component.css']
})

export class ClientNameFormComponent implements OnInit {

  invoice = this.fb.group({
    clientName:['', Validators.required]
  })

  constructor(private httpInvoice:HttpInvoiceService,
    private router:Router,
    private fb:FormBuilder,
    private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.httpInvoice.create(this.invoice).subscribe(
      res => {
        console.log(res);
        this.router.navigate([`invoices/${res["id"]}`]);
      },
      err => {
        console.log(err);
      }
    )
  }

}
