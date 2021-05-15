import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PurchaseItem } from '../models/purchase-item';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API: string = environment.url_backend + "purchase";

@Injectable({
  providedIn: 'root'
})
export class HttpPurchaseDetailService {
  private headers = this.header.generateHeader();

  constructor(private http: HttpClient,
    private header: AuthHeadGeneratorService) { }

  addPurchaseProducts(items:PurchaseItem[]) {
    return this.http.post(URI_API, items, { headers: this.headers });
  }
}
