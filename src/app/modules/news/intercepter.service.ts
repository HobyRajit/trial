import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {AuthenticationService} from '../authentication/authentication.service'
import { HttpRequest } from '@angular/common/http/src/request';
import { HttpHandler } from '@angular/common/http/src/backend';
import { Observable } from 'rxjs/Observable';
import { HttpEvent } from '@angular/common/http/src/response';

@Injectable()
export class IntercepterService implements HttpInterceptor{

  constructor(private authService : AuthenticationService) { }

  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    console.log("Inside the Token Interceptor intercept method");
    request =  request.clone({
        setHeaders:{
            Authorization:`Bearer ${this.authService.getToken()}`
        }

    }
);

    return next.handle(request).do();

}

}
