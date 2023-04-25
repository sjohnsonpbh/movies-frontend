import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() id: number;
  @Input() image_path: string = null;
  @Input() description: string = null;
  @Input() title: string = null;
  @Output() isRating = new EventEmitter<boolean>();

  // is rating boolean check for modal

  constructor() {}

  // event emitter to send isRating, and id to movies component, popup the modal

  onThumbClick(id: number) {
    // popup a modal with rating form
    // this.isRating.emit(this.id) = true;
    // event emitter send to movies component
    // this.isRating.emit(this.isRating);
  }

  onEyeClick(id: number) {
    // send movie info to movie service watchlist
  }
}
