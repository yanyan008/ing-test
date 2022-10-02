import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';

const routes: Routes = [
  {
    path: '',
    component: TvShowListComponent,
  },
  {
    path: 'home',
    component: TvShowListComponent,
  },
  { path: 'view/:id', component: TvShowDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
