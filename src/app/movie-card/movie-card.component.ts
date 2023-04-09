import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() id: number = 0;
  @Input() image_path: string = null;
  @Output() eyeClick = new EventEmitter<Movie>();
  @Output() thumbClick = new EventEmitter<Movie>();
}
