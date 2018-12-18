import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {

  list=[ ];
  constructor(public ds:HomeService) { }

  ngOnInit() {
    this.ds.getAdvertList().subscribe((res:any)=>{
      if(res.Code==100){
        this.list=res.Data;
      }
    })
  }
}
