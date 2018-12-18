import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  lists=[];
  list=[];
  constructor(public ds:ListService) { }
  index:number=0;
  ngOnInit() {
    this.ds.getBookList().subscribe((res:any)=>{
      if(res.code==1){
        this.lists=res.result;
        this.list=this.lists.slice(0,5);
      }
    })
  }

  getMoreInfo(){
    this.index=this.index+5;
    this.list=this.lists.slice(0,this.index+5);
  }

}
