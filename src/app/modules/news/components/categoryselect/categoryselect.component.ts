import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../news.service';
import {News}  from '../../news';

export interface Category{
  value:string,
  showValue:string
}

@Component({
  selector: 'news-categoryselect',
  templateUrl: './categoryselect.component.html',
  styleUrls: ['./categoryselect.component.css']
})
export class CategoryselectComponent implements OnInit {
  news:Array<News>;
  categories:Category[]=[
    {value:'entertainment',showValue:'business'},
    {value:'entertainment',showValue:'entertainment'},
    {value:'general',showValue:'general'},
    {value:'health',showValue:'health'},
    {value:'science',showValue:'science'},
    {value:'sports',showValue:'sports'},
    {value:'technology',showValue:'technology'},
  ];

  selected:string= this.categories[0].value;
  constructor(private newsService:NewsService) { 
    console.log("INside the category component");
    this.news=[];
  }

  ngOnInit() {
  }

  fetchNews(value:string){
    console.log("inside the fetchNews method")
    this.newsService.getCategoryNews('in',1,value).subscribe((data)=>{
     this.news=data;
    });
  }
}
    

