import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TimelinesComponent } from './components/timelines/timelines.component';
import { MetubePlaylistComponent } from './components/metube-playlist/metube-playlist.component';
import { MetubePlayerComponent } from './components/metube-player/metube-player.component';


const routes: Routes = [
  {
    path: 'calculate-age', component: TimelinesComponent
  },
  {
    path: 'metube', component: MetubePlaylistComponent,
    children: [{
      path: ':id', component: MetubePlayerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
