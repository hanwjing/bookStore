import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DetailPageComponent } from 'src/app/pages/detail-page/detail-page.component';

@Component({
  selector: 'app-section-book-list',
  templateUrl: './section-book-list.component.html',
  styleUrls: ['./section-book-list.component.css']
})
export class SectionBookListComponent implements OnInit {

  @Input()
  lists:any=[];
  
  @ViewChild(DetailPageComponent)
  sendSectionInfo:DetailPageComponent;
  constructor() { }

  ngOnInit() {
    // console.log(this.lists);
  }
  getBookInfo(item){
    console.log(item);
    // let bookkkk=JSON.stringify(item);
    // console.log(bookkkk);
    console.log(item.Book.ISBN);
    // this.sendSectionInfo.getBookInfo(bookkkk);
    // console.log(item);
    // console.log(item.Book.Id);
  }

}
