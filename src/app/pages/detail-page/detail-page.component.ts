import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  message:string="书 本 详 情";
  book:any={
    image:'',
    category:{},
    publisher:{}
  }
  list:any={
    Book:{
      image:'',
      Author:{
        Name:''
      },
      Publisher:{
        Name:''
      },
      Category:{
        Name:''
      },
      ISBN:'',
      Id:''
    },
    Amount:''
  }
  a:any={};

  constructor(public ds:ListService, public activateRouter:ActivatedRoute,public fs:PageService) {
    this.list.Book.ISBN=this.activateRouter.snapshot.params['ISBN'];
    this.book.id=this.activateRouter.snapshot.params['id'];
  }

  ngOnInit() {
    this.ds.getBookById(this.book.id).subscribe((res:any)=>{
      console.log(this.book.id);
      if(res.code==1){
        this.book=res.result;
      }
    })

    this.fs.getSectionListInfo(this.book.id).subscribe((res:any)=>{
      console.log(this.book.id);
      if(res.Code==100){
        this.a=res.Data;
        for(var i=0;i<this.a.length;i++){
          let b=this.a[i].Books;
          for(var j=0;j<b.length;j++){
            if(b[j].Book.ISBN==this.book.id){
              this.list=b[j];
              console.log(this.list);
              break;
            }
          }
        }
      }
    })
  }

}
