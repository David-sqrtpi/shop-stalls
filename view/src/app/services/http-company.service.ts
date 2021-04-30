import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthHeadGeneratorService } from './auth-head-generator.service';

const URI_API:string =  environment.url_backend + "companies";

@Injectable({
  providedIn: 'root'
})

export class HttpCompanyService {

  private headers = this.header.generateHeader();

  constructor(private http:HttpClient, private header:AuthHeadGeneratorService) { }

  getCompanies(){
    return this.http.get(URI_API);
  }

  getUsersFromCompany(company:number) {
    return this.http.get(URI_API+company+'/users', {headers:this.headers});
  }
}
