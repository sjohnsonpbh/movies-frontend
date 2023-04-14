import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movies/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private URL = 'http://localhost:3000/api/v1/movies';

  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.URL);
  }

  saveReview(movie: Movie) {
    // add review, and use the next(movie) to emit the movie to all who subscribe to this variable.
  }

  removeReview() {
    // use the next(this.myMovies[idx]) to emit the movie recently removed to all who subscribe to this variable.
  }
}
