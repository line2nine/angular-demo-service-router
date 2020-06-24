import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './components/timelines/timelines.component';
import { NavComponent } from './components/nav/nav.component';
import { MetubePlaylistComponent } from './components/metube-playlist/metube-playlist.component';
import { MetubePlayerComponent } from './components/metube-player/metube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    NavComponent,
    MetubePlaylistComponent,
    MetubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
