import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URI_API = 'http://localhost:8080/companies/';

@Injectable({
  providedIn: 'root'
})

export class HttpCompanyService {

  constructor(private http:HttpClient) { }

  getCompanies(){
    return this.http.get(URI_API);
  }

  getUsersFromCompany(company:number) {
    return this.http.get(URI_API+company+'/users');
  }
}
