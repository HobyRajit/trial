import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import {News} from  '../../news';
import { MatDialog} from '@angular/material';
import { NewsdialogComponent} from '../newsdialog/newsdialog.component'


@Component({
  selector: 'news-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
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

  update(actionType){
    console.log("Inside the update of thumbnail");
    let dialogRef = this.dialog.open(NewsdialogComponent,{
      width:'400px',
      data:{obj:this.anews,actionType:actionType},
    
    })
    console.log('open Dialog');
    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed');
    })
  }


}
