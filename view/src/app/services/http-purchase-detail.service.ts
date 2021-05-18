import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PurchaseItem } from '../models/purchase-item';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API: string = environment.url_backend + "purchases";

@Injectable({
  providedIn: 'root'
})
export class HttpPurchaseDetailService {
  private headers = this.header.generateHeader();
  private items: PurchaseItem[];
  private items$: Subject<PurchaseItem[]>;

  constructor(private http: HttpClient,
    private header: AuthHeadGeneratorService) {
    this.items = [];
    this.items$ = new Subject();
  }

  addItem(item:PurchaseItem) {
    this.items.push(item);
    this.items$.next(this.items);
  }

  getItems$():Observable<PurchaseItem[]> {
    return this.items$.asObservable();
  }

  addPurchaseProducts(items: PurchaseItem[], purchaseId: number) {
    return this.http.post(`${URI_API}/${purchaseId}`, items, { headers: this.headers });
  }

  getAllAsFormArray(): Observable<FormArray> {
    return this.getItems$().pipe(map((item: PurchaseItem[]) => {
      const fgs = item.map(PurchaseItem.asFormGroup);
      return new FormArray(fgs);
    }));
  }
}
