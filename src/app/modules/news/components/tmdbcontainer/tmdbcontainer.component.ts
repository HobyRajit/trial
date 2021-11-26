import { Component, OnInit } from '@angular/core';
import {News} from '../../news';
import { NewsService } from '../../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'news-tmdbcontainer',
  template:
   `
  <news-container [news]="news">

  </news-container>
  
  
  `,
  styleUrls: ['./tmdbcontainer.component.css']
})
export class TmdbcontainerComponent implements OnInit {

  news:Array<News>;
  newsCategory:string;

  constructor(private newsService:NewsService,private route:ActivatedRoute) {
    this.news=[];
    this.route.data.subscribe((datum)=>{
      this.newsCategory=datum.newsCategory;
      console.log('newsCategory: '+this.newsCategory);
    })
   }

  ngOnInit() {
    this.newsService.getNews().subscribe((news)=>{
      console.log("The news"+news);
      this.news.push(...news);
      console.log("the news."+this.news);
    })
  }

}
