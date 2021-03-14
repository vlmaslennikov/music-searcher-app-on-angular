import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServHttpService {
  constructor(private http: HttpClient){}
  getData(link: string): any{
    return this.http.jsonp(link, 'callback');
}

}
