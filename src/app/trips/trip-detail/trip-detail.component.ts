import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrl: './trip-detail.component.scss',
})
export class TripDetailComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      id: [''],
      date: [''],
      title: [''],
      region: [''],
      zone: [''],
      difficulty: [''],
      estimatedTime: [''],
      elevationGain: [''],
      maxHeight: [''],
      gear: [''],
      description: [''],
    });
  }
}
