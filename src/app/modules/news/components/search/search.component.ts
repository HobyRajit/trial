import { Component, OnInit } from '@angular/core';
import {News} from '../../news';
import { NewsService } from '../../news.service';

@Component({
  selector: 'news-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  news:Array<News>
  constructor(private newsService:NewsService) { 
    this.news=[];
  }

  ngOnInit() {
  }

  onEnter(searchkey){
    this.newsService.searchNews(searchkey).subscribe((news)=>{
      console.log("Inside the onEnter function of search component");
      this.news=news;
    })
  }
}
