import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  http_url:string="http://101.200.58.3/librarywebapi/";
  http_URL:string="http://101.200.58.3:9090/webapi/";
  constructor() { }
  
}
