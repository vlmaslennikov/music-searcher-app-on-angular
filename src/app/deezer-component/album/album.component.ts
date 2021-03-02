import { Component ,Input} from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl:'./album.component.html',
  styleUrls:['./album.component.css'],

})
export class AlbumComponent {
  trackList:any;
  view:boolean=false;
  @Input()tracks:any;

  constructor(private httpTracklist : HttpClient) {}

  loadTrackList(list:any) {
    this.view=!this.view;
    if(this.view){
      this.httpTracklist.get("https://cors-anywhere.herokuapp.com/"+list).subscribe(data => {this.trackList=data;
      console.log(this.trackList);});
    }
  }
}
