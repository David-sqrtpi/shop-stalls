import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpServicesService } from 'src/app/services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {

  serviceForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    price: ['', Validators.required],
    characteristics: ['', Validators.required],
    company: this.fb.group({
      id: [+localStorage.getItem('company')]
    })
  });

  constructor(private services: HttpServicesService,
    private fb: FormBuilder,
    private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  createService() {
    this.services.addServices(this.serviceForm.value).subscribe(
      () => this.openSnackBar("Servicio añadido"),
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
