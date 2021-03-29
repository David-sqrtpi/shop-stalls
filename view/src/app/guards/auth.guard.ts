import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private storage:LocalStorageService, private router:Router){}

  canActivate(){
    if(this.storage.get('token')){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
