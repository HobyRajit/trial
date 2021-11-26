import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from './news.service';
import { ContainerComponent } from './components/container/container.component';
import { TmdbcontainerComponent } from './components/tmdbcontainer/tmdbcontainer.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import {NewsdialogComponent}from './components/newsdialog/newsdialog.component';
import { NewsRouterModule} from './news-router.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule,  HttpInterceptor,HTTP_INTERCEPTORS } from '@angular/common/http';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

import {FormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { WatchlistrestrictedComponent } from './components/watchlistrestricted/watchlistrestricted.component';
import { ContainerrestrictedComponent } from './components/containerrestricted/containerrestricted.component';
import { ThumbnailrestrictedComponent } from './components/thumbnailrestricted/thumbnailrestricted.component';
import { IntercepterService} from './intercepter.service';
import { CategoryselectComponent } from './components/categoryselect/categoryselect.component';
import { MatSelectModule } from '@angular/material/select'





@NgModule({
  imports: [
    CommonModule,
    NewsRouterModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule,
    FormsModule,
  ],
  declarations: [ContainerComponent, TmdbcontainerComponent, ThumbnailComponent, WatchlistComponent, NewsdialogComponent, SearchComponent, WatchlistrestrictedComponent, ContainerrestrictedComponent, ThumbnailrestrictedComponent, CategoryselectComponent],
  entryComponents:[NewsdialogComponent],
  exports: [
    NewsRouterModule,
    

    ThumbnailComponent,
    NewsdialogComponent,
    MatSnackBarModule,
    
  ],
  providers: [ NewsService,{
    provide:HTTP_INTERCEPTORS,
    useClass:IntercepterService,
    multi:true

  }]
})
export class NewsModule { }
