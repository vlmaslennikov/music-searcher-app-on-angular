import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent  {
  name!:string;
  searchArtist(element:any){
  this.name= element.value;
  }
}
