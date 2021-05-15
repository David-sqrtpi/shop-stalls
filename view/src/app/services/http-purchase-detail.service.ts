import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PurchaseItem } from '../models/purchase-item';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API: string = environment.url_backend + "purchases";

@Injectable({
  providedIn: 'root'
})
export class HttpPurchaseDetailService {
  private headers = this.header.generateHeader();

  constructor(private http: HttpClient,
    private header: AuthHeadGeneratorService) { }

  addPurchaseProducts(items:PurchaseItem[], purchaseId:number) {
    return this.http.post(`${URI_API}/${purchaseId}`, items, { headers: this.headers });
  }
}
