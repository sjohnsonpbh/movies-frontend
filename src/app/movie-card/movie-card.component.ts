import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() id: number = 0;
  @Input() image_path: string = null;
  @Input() description: string = null;
  @Input() title: string = null;

  constructor(private movieService: MovieService) {}

  onThumbClick(id: number) {
    // popup a modal with rating form
    this.movieService.openModal();
  }

  onEyeClick(id: number) {
    // send movie info to movie service watchlist
  }
}
