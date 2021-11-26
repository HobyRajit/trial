
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import {AuthenticationRouterModule} from './authentication-router.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    AuthenticationRouterModule,
  ],
  declarations: [RegisterComponent,LoginComponent],
  providers: [AuthenticationService],
  exports: [RegisterComponent,LoginComponent]
})
export class AuthenticationModule {


 }
