import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  list=[ ];
  constructor(public ds:HomeService) { }

  ngOnInit() {
    this.ds.getSectionList().subscribe((res:any)=>{
      // console.log(res);
      if(res.Code==100){
        this.list=res.Data;
      }
    })
  }

}
