import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelinesComponent } from './components/timelines/timelines.component';


const routes: Routes = [
  {
    path: 'calculate-age', component: TimelinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
