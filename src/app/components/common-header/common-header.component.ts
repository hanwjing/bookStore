import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {

  @Input()
  message:string="";
  
  constructor() { }

  ngOnInit() {
  }

}
