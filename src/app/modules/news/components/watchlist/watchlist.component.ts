import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../news.service';
import {News} from '../../news';

@Component({
  selector: 'news-watchlist',
  template: `
  <news-container [news]="news" [useWatchListApi]="useWatchListApi">  </news-container>
  `,
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  news:Array<News>;
  useWatchListApi:boolean = true;

  constructor(private newsService:NewsService) { 
    this.news=[];
  }

  ngOnInit() {
    this.newsService.getNewsFromWatchList().
    subscribe((news)=>{
      console.log(news);
      this.news.push(...news);
    })
  }


}
