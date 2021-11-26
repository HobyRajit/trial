import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';
import {AuthenticationService} from './modules/authentication/authentication.service';
@Injectable()
export class RoleGaurdService implements CanActivate{

  constructor(private authService:AuthenticationService,private router:Router) { }

  canActivate(){
    if(!this.authService.isTokenExpired()){
      console.log("inside the canActivate()");
      if(this.authService.isUserAdmin()){
    
      return true;
      }else{
        this.router.navigate(['/news/restrictedwatchlist']);
        return false;
      }

  }else{
  this.router.navigate(['/login']);
  return false;
  }
  }


  
}
