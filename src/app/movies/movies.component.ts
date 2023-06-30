import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../movies/movie';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  watchListMovies: any = [];
  // isRating = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  handleCloseModal() {
    // change in movie service
    // set isRating to false
  }
  fetchMovies() {
    this.http.get<Movie[]>(environment.URL);
  }
}
