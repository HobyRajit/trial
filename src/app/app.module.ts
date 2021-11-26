import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewsModule } from './modules/news/news.module';

import {FormsModule} from '@angular/forms';


import {RouterModule,Routes} from  '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule,MatButton} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import {NewsService} from './modules/news/news.service';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AuthGaurdService } from './auth-gaurd.service';
import { RoleGaurdService } from './role-gaurd.service';



const appRoutes:Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full',
  }
]

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    NewsModule,
    AuthenticationModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGaurdService, RoleGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
