import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  watchListMovies: any = [];
  // isRating = false;
  constructor() {}

  ngOnInit(): void {}

  handleCloseModal() {
    // change in movie service
    // set isRating to false
  }
}
