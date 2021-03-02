import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlbumComponent } from './deezer-component/album/album.component';
import { DeezerComponentComponent } from './deezer-component/deezer-component.component';
import { ItunesComponentComponent } from './itunes-component/itunes-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    DeezerComponentComponent,
    ItunesComponentComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
