import { Component, Input, OnChanges} from '@angular/core';
import {ServHttpService} from '../serv-http.service';

@Component({
  selector: 'app-deezer-component',
  templateUrl: './deezer-component.component.html',
  styleUrls: ['./deezer-component.component.css'],
  providers: [ServHttpService]
})
export class DeezerComponentComponent implements OnChanges {
  albums: any = {};
  @Input()artistName!: string;

  constructor(private httpService: ServHttpService){}
  ngOnChanges(): any{
    this.httpService.getData('https://api.deezer.com/search/album?q=' + this.artistName + '&output=jsonp')
    .subscribe((data: any) => {this.albums = data; });
  }


}
