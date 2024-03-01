import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '@app/@shared/models/trips.model';
import { TripsService } from '@app/@shared/services/trips.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrl: './trip-detail.component.scss',
})
export class TripDetailComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private tripsService: TripsService,
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.tripsService.getTrip(this.id).subscribe((response: Trip) => {
      this.form = this.formBuilder.group({
        id: [response.id],
        date: [response.date, Validators.required],
        title: [response.title, Validators.required],
        region: [response.region, Validators.required],
        zone: [response.zone, Validators.required],
        difficulty: [response.difficulty, Validators.required],
        estimatedTime: [response.estimatedTime, Validators.required],
        elevationGain: [response.elevationGain, Validators.required],
        maxHeight: [response.maxHeight, Validators.required],
        gear: [response.gear, Validators.required],
        description: [response.description, Validators.required],
      });
    });
  }
}
