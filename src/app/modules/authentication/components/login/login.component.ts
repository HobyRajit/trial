import { Component, OnInit } from '@angular/core';
import {user} from '../../user';
import {AuthenticationService} from '../../authentication.service';
import { Router} from '@angular/router';

@Component({
  selector: 'authentication-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  newUser:user;
  constructor(private authenticationService:AuthenticationService,private router:Router) { 
    this.newUser = new user();
  }

  ngOnInit() {
  }

  loginUser(){
    this.authenticationService.loginUser(this.newUser).subscribe((data)=>{
      console.log("The data from login service"+data);
    
      console.log("The token is "+data['token']);
      if(data["token"]){
        this.authenticationService.setToken(data['token']);
        console.log('The token :'+ data['token']);
        this.router.navigate(['/news/headlines']);
      }
      
     
    })

  }
}
