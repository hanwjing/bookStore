import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { FlashPageComponent } from './pages/flash-page/flash-page.component';
import { CommonHeaderComponent } from './components/common-header/common-header.component';
import { NavComponent } from './components/nav/nav.component';
import { AdvertComponent } from './components/advert/advert.component';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';
import { SectionComponent } from './components/section/section.component';
import { SectionBookListComponent } from './components/section-book-list/section-book-list.component';
import { HomeBookPipe } from './pipes/home-book.pipe';
import { ReturnHeaderComponent } from './components/return-header/return-header.component';
import { BottomCartComponent } from './components/bottom-cart/bottom-cart.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListPageComponent,
    CartPageComponent,
    MyPageComponent,
    LoginPageComponent,
    DetailPageComponent,
    FlashPageComponent,
    CommonHeaderComponent,
    NavComponent,
    AdvertComponent,
    BookListItemComponent,
    SectionComponent,
    SectionBookListComponent,
    HomeBookPipe,
    ReturnHeaderComponent,
    BottomCartComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
