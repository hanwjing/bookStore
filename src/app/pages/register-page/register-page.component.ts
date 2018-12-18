import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FlashPageComponent } from '../flash-page/flash-page.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  message:string="注册界面";
  @ViewChild(FlashPageComponent)
  registerAfterDialog:FlashPageComponent;
  constructor(public location:Location) { }

  ngOnInit() {
  }

  submitForm(formModel:FormGroup){
    if(formModel.valid){
      console.log(formModel);
      // 提交数据
    }
  }
  btn_cancel(){
    this.location.back();
  }
  btn_onclick(){
    this.registerAfterDialog.show("注册成功!");
  }
}
