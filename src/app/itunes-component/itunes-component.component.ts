import { Component, Input, OnChanges} from '@angular/core';
import {ServHttpService} from '../serv-http.service';

@Component({
  selector: 'app-itunes-component',
  templateUrl: './itunes-component.component.html',
  styleUrls: ['./itunes-component.component.css'],
  providers: [ServHttpService]
})
export class ItunesComponentComponent implements OnChanges {

  albums: any = {};
  @Input()artistName!: string;
  constructor(private httpService: ServHttpService){}

  ngOnChanges(): any{
      this.httpService.getData('https://itunes.apple.com/search?term=' + this.artistName + '&entity=album')
      .subscribe((data: any) => {this.albums = data; });
  }

}
