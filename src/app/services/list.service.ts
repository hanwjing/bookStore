import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url:string="http://101.200.58.3:9090/webapi/";
  constructor(public http:HttpClient) { }

  getBookList():Observable<any>{
    return this.http.get(this.url+'book?method=list');
  }

  getBookById(bookId:string):Observable<any>{
    return this.http.get(this.url+'book?method=getBookById&id='+bookId);
  }

}
