import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Purchase } from '../models/purchase';
import { PurchaseItem } from '../models/purchase-item';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API: string = environment.url_backend + "purchases";

@Injectable({
  providedIn: 'root'
})

export class HttpPurchaseService {
  constructor(private http: HttpClient,
    private header: AuthHeadGeneratorService) { }
  private headers = this.header.generateHeader();

  create(purchase: Purchase) {
    return this.http.put<Purchase>(URI_API, purchase, { headers: this.headers });
  }

  getPurchase(id: number) {
    return this.http.get<Purchase>(`${URI_API}/${id}`, { headers: this.headers });
  }

  getAll() {
    return this.http.get<Purchase[]>(`${URI_API}?company=${localStorage.getItem('company')}`, { headers: this.headers });
  }

  addPurchaseProducts(items: PurchaseItem[], purchaseId: number) {
    return this.http.post(`${URI_API}/${purchaseId}`, items, { headers: this.headers });
  }
}
