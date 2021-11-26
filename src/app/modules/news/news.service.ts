import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {News} from './news';



@Injectable()
export class NewsService {
  apiKey:string;
  tmdbEndpoint:string;
  imagePrefix:string;
  watchListEndpoint:string;
  springEndpoint:string;
  tmdbSearchEndpoint:string;

  constructor(private http:HttpClient) { 
    this.apiKey='apikey=bc90766a9b754d41b481da705338a927';
    this.tmdbEndpoint = 'https://newsapi.org/v2/top-headlines?';
    this.springEndpoint='http://localhost:8086/api/v1/news';
    

  }

  getNews(country:String='in',page:number=1):Observable<Array<News>>{
    const endpoint = `${this.tmdbEndpoint}country=${country}&${this.apiKey}&page=${page}`;
    return this.http.get(endpoint).pipe(
      map(this.pickNewsResult)
      )
  }

  getCategoryNews(country:String='in',page:number=1,category:string):Observable<Array<News>>{
    const endpoint = `${this.tmdbEndpoint}country=${country}&category=${category}&${this.apiKey}&page=${page}`;
    console.log("The url is :"+endpoint);
    return this.http.get(endpoint).pipe(
      map(this.pickNewsResult)
      )
  }
  pickNewsResult(response){
    console.log('response'+response['articles']);
    return response['articles'];
  }

  addNewsToWatchList(news){
    console.log("Inside the service method")
    console.log("The url is"+news.urlToImage);
    return this.http.post(this.springEndpoint,news);
  }

  getNewsFromWatchList():Observable<Array<News>>{
    return this.http.get<Array<News>>(this.springEndpoint);
  }

  deleteNewsFromWatchList(news){
    console.log("Inside the deleteNewsFromWatchlist of service");
    const url = `${this.springEndpoint}/${news.id}`;
    return this.http.delete(url,{responseType:"text"});
  }

  updateContent(news){
    console.log("Inside update contents of news");
    const url = `${this.springEndpoint}/${news.id}`;
    return this.http.put(url,news);
    

  }

  searchNews(searchkey:string):Observable<Array<News>>{
    console.log("Inside searchnews od newswervice");
    if(searchkey.length > 0){
      const url=`${this.tmdbEndpoint}q=${searchkey}&${this.apiKey}&page=1`;
      return this.http.get(url).pipe(map(this.pickNewsResult));
    }
  }

  }
