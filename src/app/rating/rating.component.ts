import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() ratingModal: string;
  @Output() closeModal = new EventEmitter<void>();

  constructor() {}
  ngOnInit(): void {}

  onSubmit(reviewForm: NgForm) {}
  onResetForm() {}

  onCloseModal() {
    this.closeModal.emit();
  }
}
