import { Component , Input} from '@angular/core';
import {ServHttpService} from '../../serv-http.service';

@Component({
  selector: 'app-tracklist',
  templateUrl: './app-tracklist.component.html',
  styleUrls: ['./app-tracklist.component.css'],
  providers: [ServHttpService]
})
export class TracklistComponent {
  tracklist: any = {};
  view = false;
  @Input()tracks: any;

  constructor(private httpTracklist: ServHttpService) {}

  loadTrackList(list: any): any{
    this.view = !this.view;
    if (this.view){
      this.httpTracklist.getData(list + '&output=jsonp')
      .subscribe((data: any) => {this.tracklist = data; });
    }
  }
}
