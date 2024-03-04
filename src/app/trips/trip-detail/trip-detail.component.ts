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
  groupId: number;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private tripsService: TripsService,
  ) {
    this.groupId = Number(this.activatedRoute.snapshot.paramMap.get('groupId'));
  }

  ngOnInit(): void {
    this.tripsService.getTrip(this.groupId).subscribe((response: Trip[]) => {
      let tripDays: FormArray = this.formBuilder.array([]);
      response.forEach((element) => tripDays.push(this.toFormGroup(element)));

      this.form = this.formBuilder.group({
        tripDays: tripDays,
      });

      this.isLoading$.next(false);
    });
  }

  get tripDays(): FormArray {
    return this.form.get('tripDays') as FormArray;
  }

  private toFormGroup(trip: Trip): FormGroup {
    return this.formBuilder.group({
      id: [trip.id],
      groupId: [trip.groupId],
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
