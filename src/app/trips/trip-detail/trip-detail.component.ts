import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '@app/@shared/models/trips.model';
import { TripsService } from '@app/@shared/services/trips.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrl: './trip-detail.component.scss',
})
export class TripDetailComponent implements OnInit {
  form: FormGroup;
  id: number;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private tripsService: TripsService,
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.tripsService.getTrip(this.id).subscribe((response: Trip) => {
      this.form = this.toFormGroup(response);
      this.isLoading$.next(false);
    });
  }

  private toFormGroup(trip: Trip): FormGroup {
    return this.formBuilder.group({
      id: [trip.id],
      date: [trip.date, Validators.required],
      title: [trip.title, Validators.required],
      region: [trip.region, Validators.required],
      zone: [trip.zone, Validators.required],
      difficulty: [trip.difficulty, Validators.required],
      estimatedTime: [trip.estimatedTime, Validators.required],
      elevationGain: [trip.elevationGain, Validators.required],
      maxHeight: [trip.maxHeight, Validators.required],
      gear: [trip.gear, Validators.required],
      description: [trip.description, Validators.required],
    });
  }
}
