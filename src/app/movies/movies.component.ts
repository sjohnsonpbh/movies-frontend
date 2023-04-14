import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  private selectedBookSubscription: Subscription;
  reviewAlert: string;

  movies: any = [];
  watchListMovies: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.fetchMovies().subscribe((res: any) => {
      if (res.success) {
        this.movies = res.payload.movie;
      }
    });
  }

  ngOnDestroy(): void {}
}
