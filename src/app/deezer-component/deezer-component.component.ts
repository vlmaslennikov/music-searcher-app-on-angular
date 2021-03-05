import { Component, Input, OnChanges} from '@angular/core';
import {ServHttpService} from '../serv-http.service';

interface DeezerAlbum{
  cover:string,
  artisName:string,
  albumTitle:string,
  numberOfSongs:number,
  link:string,
  demoTrackList:any
}

@Component({
  selector: 'app-deezer-component',
  templateUrl: './deezer-component.component.html',
  styleUrls:['./deezer-component.component.css'],
  providers: [ServHttpService]
})
export class DeezerComponentComponent implements OnChanges {
  albums:any={};
  @Input()artistName!:string;

  constructor(private httpService: ServHttpService){}
  ngOnChanges(){
    this.httpService.getData("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+this.artistName)
    .subscribe(data => {this.albums=data;});
  }


}
