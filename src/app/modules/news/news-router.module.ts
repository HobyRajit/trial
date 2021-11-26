import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {TmdbcontainerComponent} from './components/tmdbcontainer/tmdbcontainer.component';
import {WatchlistComponent} from './components/watchlist/watchlist.component';
import {SearchComponent} from './components/search/search.component';
import {WatchlistrestrictedComponent} from './components/watchlistrestricted/watchlistrestricted.component'
import { AuthGaurdService } from '../../auth-gaurd.service';
import {RoleGaurdService} from '../../role-gaurd.service';
import {CategoryselectComponent} from './components/categoryselect/categoryselect.component';


const newsRoutes:Routes = [
  {
    path:'news',
    children:[
      {
        path:'',
        component:TmdbcontainerComponent,
        canActivate:[AuthGaurdService],
        data:{
          newsCategory:'general'
        },
      },
      {
        path:'category',
        component:CategoryselectComponent,
        canActivate:[AuthGaurdService],
        data:{
          newsCategory:'general'
        },
      },
      {
        path:'headlines',
        component:TmdbcontainerComponent,
        canActivate:[AuthGaurdService],
        data:{
          newsCategory:'general'
        },
      },
      {
        path:'watchlist',
        component:WatchlistComponent,
        canActivate:[RoleGaurdService],
      },
      {
        path:'restrictedwatchlist',
        component:WatchlistrestrictedComponent,
        canActivate:[AuthGaurdService],
      },
      {
        path:'search',
        component:SearchComponent,
        canActivate:[AuthGaurdService],
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes),
  ],
  declarations: [],
  exports:[
    RouterModule,
  ]
})
export class NewsRouterModule { }
