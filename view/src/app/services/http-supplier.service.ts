import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../models/Supplier';
import { environment } from 'src/environments/environment.prod';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API = environment.url_backend + 'supplieres';

@Injectable({
  providedIn: 'root'
})
export class HttpSupplierService {
  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  getAll() {
    return this.http.get<Supplier[]>(URI_API, {headers:this.headers});
  }
}
