import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {user} from './user';
import * as jwt_decode from "jwt-decode";
import { Observable } from 'rxjs/Observable';

export const TOKEN_NAME:string = "jwt-token";
@Injectable()
export class AuthenticationService {
  
 springurl : string ="http://localhost:8082/user";
 token:string;
  constructor(private httpClient: HttpClient  ) { 
    this.httpClient=httpClient;
  }

  registerUser(user :user){
    console.log("Inside registeruser of userservice. "+"user :"+user);
    const  url = this.springurl +`/register`;
    return this.httpClient.post(url,user,{responseType:'text'});
  }


  loginUser(user:user){
    console.log("Inside the login of userservice");
    const url = this.springurl+`/login`;
    return this.httpClient.post(url,user,{responseType:'json'});
  }
  setToken(token){
    console.log("The token:",token);
    //localStorage.removeItem(TOKEN_NAME);
    return localStorage.setItem(TOKEN_NAME,token);
  }

  getToken(){
    var token = localStorage.getItem(TOKEN_NAME);
    console.log("Token retrieved from localstorage :"+ token);
    return token;
  }

  deleteToken(){
    console.log("Inside deletoken");
    console.log("the token :"+localStorage.getItem(TOKEN_NAME));
     return localStorage.removeItem(TOKEN_NAME);
   }

   getTokenExpirationDate(token:string){
     const decoded = jwt_decode(token);
     console.log("The decoded token in isAdmin :"+decoded);
     if(decoded.exp===undefined) return null;
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
 }

 isTokenExpired():boolean{
  if(!this.token) this.token= this.getToken();
  if(!this.token) return true;
  const date = this.getTokenExpirationDate(this.token);
  if(date === undefined || date == null) return false;
  return !(date.valueOf > new Date().valueOf);
}

isUserAdmin(){
  if(!this.token) this.token= this.getToken();
  const decoded = jwt_decode(this.token);
  console.log("The decoded token in isAdmin :"+decoded);
  if(decoded.admin ===undefined) return false;
  return decoded.admin ;
}


}
