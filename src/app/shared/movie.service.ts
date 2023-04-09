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
}
