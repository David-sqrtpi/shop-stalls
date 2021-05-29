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

  createPurchase() {
    return this.http.post<Purchase>(URI_API, null, { headers: this.headers });
  }

  getPurchase(id: number) {
    return this.http.get<Purchase>(`${URI_API}/${id}`, { headers: this.headers });
  }

  getAll() {
    return this.http.get<Purchase[]>(`${URI_API}?company=${localStorage.getItem('company')}`, { headers: this.headers });
  }
}
