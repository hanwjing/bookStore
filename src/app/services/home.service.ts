import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  http_url:string="http://101.200.58.3/librarywebapi/";
  http_URL:string="http://101.200.58.3:9090/webapi/";

  constructor( public http:HttpClient) { }

  getAdvertList():Observable<any>{
    return this.http.get(this.http_url+'advert/list');
  }
  getSectionList():Observable<any>{
    return this.http.get(this.http_url+'section/list');
  }
  // getSectionsBooks():Observable<any>{
  //   return this.http.get();
  // }


}
