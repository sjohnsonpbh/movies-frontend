import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  watchListMovies: any = [];
  // isRating = false;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.fetchMovies().subscribe((res: any) => {
      if (res.success) {
        this.movies = res.payload.movie;
      }
    });
  }

  handleCloseModal() {
    // change in movie service
    // set isRating to false
  }
}
