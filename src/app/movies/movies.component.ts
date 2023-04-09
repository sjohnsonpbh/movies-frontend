import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  watchListMovies: any = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.fetchMovies().subscribe((res: any) => {
      if (res.success) {
        this.movies = res.payload.results;
        console.log('Res=' + res.payload.results);
      }
    });
  }
  onThumbClick(movie: Movie) {}
  onEyeClick(movie) {}
}
