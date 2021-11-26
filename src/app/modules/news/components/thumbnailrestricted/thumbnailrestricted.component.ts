import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import {News} from  '../../news';
import { MatDialog} from '@angular/material';
import { NewsdialogComponent} from '../newsdialog/newsdialog.component'

@Component({
  selector: 'news-thumbnailrestricted',
  templateUrl: './thumbnailrestricted.component.html',
  styleUrls: ['./thumbnailrestricted.component.css']
})
export class ThumbnailrestrictedComponent implements OnInit {

  @Input()
  anews:News

  @Input()
  useWatchListApi:boolean;
  @Output()
  addnews = new EventEmitter();

  @Output()
  deletenews = new EventEmitter();

  @Output()
  updatenews = new EventEmitter();
  
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  addToWatchList(){
    console.log("Inside the addToWatchList of thumbnail");
    this.addnews.emit(this.anews);

  }

  deleteFromWatchList(){
    console.log("Inside the deleteFromWatchList of thumbnail");
    this.deletenews.emit(this.anews);
  }

 


}
