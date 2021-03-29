import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class NegateUserLoggedGuard implements CanActivate {

  constructor(private storage:LocalStorageService, private router:Router) { }

  canActivate(){
    if(!this.storage.get('token')){
      return true;
    }
    else{
      this.router.navigate(['']);
      return false;
    }
  }
  
}
