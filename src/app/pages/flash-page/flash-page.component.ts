import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-page',
  templateUrl: './flash-page.component.html',
  styleUrls: ['./flash-page.component.css']
})
export class FlashPageComponent implements OnInit {

  state:boolean=false;
  message:string="";
  constructor() { }

  ngOnInit() {
  }
  show(msg){
    this.message=msg;
    this.state=true;
    window.setTimeout(()=>{
      this.state=false;
    },600);
  }
}
