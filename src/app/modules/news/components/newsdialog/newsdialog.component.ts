import { Component, OnInit ,Inject,Input} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsService } from '../../news.service';
import {News} from '../../news';

@Component({
  selector: 'news-newsdialog',
  templateUrl: './newsdialog.component.html',
  styleUrls: ['./newsdialog.component.css']
})
export class NewsdialogComponent implements OnInit {
  news:News ;
  content:string;
  actionType:string;

  constructor( public snackBar:MatSnackBar,public dialogRef:MatDialogRef<NewsdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  private newsService:NewsService) {
    this.content=data.obj.content;
    this.news=data.obj;
    this.actionType=data.actionType;

   }

  
   ngOnInit() {
    console.log(this.data);
  }

  onNoClick(){
    this.dialogRef.close();
  }

  updateContent(){
    this.news.content = this.content;
    this.dialogRef.close();
    this.newsService.updateContent(this.news).subscribe((news)=>{
      this.snackBar.open("News updated",'',{duration:2000});
    })
  }

}
