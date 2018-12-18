import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { FlashPageComponent } from './pages/flash-page/flash-page.component';
import { GuardService } from './services/guard.service';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:'list',component:ListPageComponent},
  {path:'cart',component:CartPageComponent, canActivate:[GuardService]},
  {path:'myself',component:MyPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'detail/:id',component:DetailPageComponent},
  {path:'detail/:ISBN',component:DetailPageComponent},
  {path:'flash',component:FlashPageComponent},
  {path:'register',component:RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
