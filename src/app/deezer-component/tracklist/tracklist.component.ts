import { Component ,Input} from '@angular/core';
import {ServHttpService} from '../../serv-http.service';

@Component({
  selector: 'tracklist-comp',
  templateUrl:'./tracklist.component.html',
  styleUrls:['./tracklist.component.css'],
  providers: [ServHttpService]
})
export class TracklistComponent {
  tracklist:any={};
  view:boolean=false;
  @Input()tracks:any;

  constructor(private httpTracklist : ServHttpService) {}

  loadTrackList(list:any) {
    this.view=!this.view;
    if(this.view){
      this.httpTracklist.getData("https://cors-anywhere.herokuapp.com/"+list)
      .subscribe(data => {this.tracklist=data;});
    }
  }
}