import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpProdutService } from 'src/app/services/produt.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  productForm = this.fb.group({
    barcode: [this.data.code, Validators.required],
    name: ['', Validators.required],
    minStock: ['', Validators.required],
    company: this.fb.group({
      id: [+localStorage.getItem('company')]
    })
  });

  constructor(private product: HttpProdutService,
    private fb: FormBuilder,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: {code: string},
    public dialogRef: MatDialogRef<AddProductComponent>) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.product.addProduct(this.productForm.value).subscribe(
      () => {
        this.openSnackBar("Producto añadido");
      },
      err => console.log(err)
    )
  }

  openSnackBar(message: string) {
    this.snack.open(message, null, {
      duration: 3000,
    });
    this.dialogRef.close();
  }

  get barcode() {
    return this.productForm.get('barcode');
  }
}