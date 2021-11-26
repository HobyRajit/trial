import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <mat-toolbar color='primary'>
  <span>
    News App 
  </span>
  
  <button mat-button [routerLink]="['/news/headlines']">News Headlines</button>
  <button mat-button [routerLink]="['/news/category']">News Category</button>
 <!-- <button mat-button [routerLink]="['/news/categoryselect']">News Category</button>-->
  <button mat-button [routerLink]="['/news/watchlist']">Watch List</button>
  <button mat-button id="search-button" [routerLink]="['/news/search']">Search</button>
  
</mat-toolbar>

<router-outlet>
</router-outlet>`,
  styles: []
})
export class AppComponent {
  title = 'app';
}
