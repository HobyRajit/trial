import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../news.service';
import {News} from '../../news';


@Component({
  selector: 'news-watchlistrestricted',
  template: ` <news-containerrestricted [news]="news" [useWatchListApi]="useWatchListApi">  </news-containerrestricted>`,
  styleUrls: ['./watchlistrestricted.component.css']
})
export class WatchlistrestrictedComponent implements OnInit {
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
