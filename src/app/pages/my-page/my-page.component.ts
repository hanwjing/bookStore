import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  message:string="个人中心";
  constructor() { }

  ngOnInit() {
  }

}
