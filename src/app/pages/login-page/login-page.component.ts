import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  message:string="登 录";
  userName:string='';
  constructor(public router:Router,public location:Location) { }

  ngOnInit() {
  }
  submitForm(formModel:FormGroup){
    if(formModel.valid){
      console.log(formModel);
      // 提交数据
    }
  }

  btn_onclick():void{
    if(this.userName){
        sessionStorage.setItem('User',this.userName);
        this.router.navigateByUrl(sessionStorage.getItem('Redirect'));
        sessionStorage.removeItem('Redirect');
    }
    console.log(this.userName);
  }
  btn_cancel():void{
    this.location.back();
  }
}
