import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpProdutService } from 'src/app/services/produt.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  productForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    price: ['', Validators.required],
    minStock: ['', Validators.required],
    company: this.fb.group({
      id: [+localStorage.getItem('company')]
    })
  });

  constructor(private product: HttpProdutService,
    private fb: FormBuilder,
    private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.product.addProduct(this.productForm.value).subscribe(
      () => this.openSnackBar("Producto añadido"),
      err => console.log(err)
    )
  }

  openSnackBar(message: string) {
    this.snack.open(message, null, {
      duration: 3000,
    });
    window.location.reload();
  }
}
