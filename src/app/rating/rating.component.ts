import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() ratingModal: string;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}

  onSubmit(reviewForm: NgForm) {}

  onResetForm() {
    this.router.navigate(['./'], { relativeTo: this.route });
  }

  onCloseModal() {
    this.closeModal.emit();
  }
}
