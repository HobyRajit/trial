import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';
import {AuthenticationService} from './modules/authentication/authentication.service';


@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(private authService:AuthenticationService,private router:Router) { }

  canActivate(){
    if(!this.authService.isTokenExpired()){
      console.log("inside the canActivate()");
    
      return true;
  }
  this.router.navigate(['/login']);
  return false;
  }


  

}
