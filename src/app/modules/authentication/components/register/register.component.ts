import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';   
import {user} from '../../user';
import {Router} from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'authentication-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser:user;
  constructor(private authService:AuthenticationService,private router:Router,private snackBar:MatSnackBar ) {
    this.newUser = new user();
//    this.newUser = Object.create(user.prototype);

   }

  ngOnInit() {
  }

  checkAdmin(isAdmin){
    console.log("isAdmin value:"+isAdmin);
    this.newUser.admin=isAdmin;
  }
  registerUser(){
    console.log("inside the registeruser of registercomponent");
    console.log(`users :`+this.newUser.admin);
    this.authService.registerUser(this.newUser).subscribe((data)=>{
      console.log('data inside register'+data);
      this.snackBar.open(data,'',{
        duration:1000
      },
    );
    this.router.navigate(['/login']);
  })

  }

}
