import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Nation } from '@app/@shared/models/geography.model';
import { Difficulty, Trip } from '@app/@shared/models/trips.model';
import { GeographyService } from '@app/@shared/services/geography.service';
import { TripsService } from '@app/@shared/services/trips.service';
import { BehaviorSubject, EMPTY, Observable, catchError, finalize, map } from 'rxjs';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrl: './trip-detail.component.scss',
})
export class TripDetailComponent implements OnInit {
  baseTrip: Trip;
  difficulties$: Observable<Difficulty[]>;
  form: FormGroup;
  groupId: number;
  showRegion$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isSaving$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  nations$: Observable<Nation[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private geographyService: GeographyService,
    private snackBar: MatSnackBar,
    private tripsService: TripsService,
  ) {
    this.groupId = Number(this.activatedRoute.snapshot.paramMap.get('groupId'));
  }

  ngOnInit(): void {
    this.difficulties$ = this.tripsService.getDifficulties();
    this.nations$ = this.geographyService.getNations();

    this.tripsService.getTrip(this.groupId).subscribe((response: Trip[]) => {
      this.baseTrip = response[0];

      let tripDays: FormArray = this.formBuilder.array([]);
      response.forEach((element) => tripDays.push(this.toFormGroup(element)));

      this.form = this.formBuilder.group({
        tripDays: tripDays,
      });

      this.isLoading$.next(false);
    });
  }

  addTripDay() {
    const newTripDay = {} as Trip;
    newTripDay.groupId = this.baseTrip.groupId;
    newTripDay.title = this.baseTrip.title;
    newTripDay.date = this.baseTrip.date; // TODO aggiungere automaticamente un giorno
    newTripDay.nation = this.baseTrip.nation;
    newTripDay.region = this.baseTrip.region;
    newTripDay.zone = this.baseTrip.zone;

    this.tripDays.push(this.toFormGroup(newTripDay));
  }

  compareById(o1: any, o2: any): boolean {
    return o1.id === o2.id;
  }

  changeNation(event: MatSelectChange) {
    this.showRegion$.next(!event.value.isForeign);
  }

  save() {
    this.isSaving$.next(true);

    const toSave: Trip[] = [];
    this.tripDays.controls.forEach((control) => {
      toSave.push(this.toTrip(control as FormGroup));
    });

    this.tripsService
      .save(toSave)
      .pipe(
        map(() => {
          this.snackBar.open('Salvataggio completato', 'Chiudi', { duration: 2000 });
        }),
        catchError((error) => {
          this.snackBar.open(error, 'Chiudi', { duration: 10000 });
          return EMPTY;
        }),
        finalize(() => this.isSaving$.next(false)),
      )
      .subscribe();
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
      nation: [trip.nation, Validators.required],
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

  private toTrip(formGroup: FormGroup): Trip {
    return {
      id: formGroup.get('id')?.value,
      date: formGroup.get('date')?.value,
      title: formGroup.get('title')?.value,
      groupId: formGroup.get('groupId')?.value,
      nation: formGroup.get('nation')?.value,
      region: formGroup.get('region')?.value,
      zone: formGroup.get('zone')?.value,
      difficulty: formGroup.get('difficulty')?.value,
      estimatedTime: formGroup.get('estimatedTime')?.value,
      elevationGain: formGroup.get('elevationGain')?.value,
      maxHeight: formGroup.get('maxHeight')?.value,
      gear: formGroup.get('gear')?.value,
      description: formGroup.get('description')?.value,
    };
  }
}
