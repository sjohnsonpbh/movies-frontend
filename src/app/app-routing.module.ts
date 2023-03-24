import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

import { MoviesComponent } from './movies/movies.component';
import { ReviewRateComponent } from './review-rate/review-rate.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'review', component: ReviewRateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
