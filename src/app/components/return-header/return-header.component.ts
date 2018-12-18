import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-return-header',
  templateUrl: './return-header.component.html',
  styleUrls: ['./return-header.component.css']
})
export class ReturnHeaderComponent implements OnInit {

  @Input()
  message:string="";
  constructor(public location:Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }

}
