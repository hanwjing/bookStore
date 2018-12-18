import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  http_url:string="http://101.200.58.3/librarywebapi/";
  constructor(public http:HttpClient) { }

  getSectionListInfo(itemBookIsbn:string):Observable<any>{
    return this.http.get(this.http_url+'section/list');
  }
}
