import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  onSubmit(reviewForm: NgForm) {}
  onResetForm() {}
}
