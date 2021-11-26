import { Component, OnInit,Input  } from '@angular/core';

import { News } from '../../news';
import {NewsService} from '../../news.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'news-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input()
  news:Array<News>;


  @Input()
  useWatchListApi:boolean;
  constructor(private newsService:NewsService,private snackBar:MatSnackBar) { 
   
  }

  ngOnInit() {
  }

  addNewsToWatchlist(anews){
    console.log('inside addToWatchList of container component '+anews);
    this.newsService.addNewsToWatchList(anews).
    subscribe(()=>{
      console.log(anews);
      this.snackBar.open('News Added to WatchList','',{
        duration:1000
      });
    });;
    
  }

  deleteNewsFromWatchList(anews){
    console.log('inside deletefromwatchList of container component');
    this.newsService.deleteNewsFromWatchList(anews).
    subscribe(()=>{
      console.log(`News deleted ${{anews}}`);

      for(var i=0;i<this.news.length;i++){
        if(this.news[i].title === anews.title){
            this.news.splice(i,1);
        }
      }
      this.snackBar.open('News is getting delted','',{
        duration:1000
      });

    })
  }
  updateNews(anews){
    console.log('inside update of container component');

  }
}
