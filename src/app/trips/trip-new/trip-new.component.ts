import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TripHeader } from '@app/@shared/models/trips.model';
import { TripsService } from '@app/@shared/services/trips.service';
import { BehaviorSubject, EMPTY, catchError, finalize, map } from 'rxjs';

@Component({
  selector: 'app-trip-new',
  templateUrl: './trip-new.component.html',
  styleUrl: './trip-new.component.scss',
})
export class TripNewComponent implements OnInit {
  form: FormGroup;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private dialogRef: MatDialogRef<TripNewComponent>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private tripsService: TripsService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [],
      date: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  close(): void {
    this.dialogRef.close(0);
  }

  save(): void {
    this.isLoading$.next(true);

    const toSave: TripHeader = {
      id: 0,
      date: this.form.get('date')?.value,
      title: this.form.get('title')?.value,
    };

    this.tripsService
      .createTrip(toSave)
      .pipe(
        map((response: number) => {
          this.snackBar.open('Salvataggio completato', 'Chiudi', { duration: 2000 });
          this.dialogRef.close(response);
        }),
        catchError((error) => {
          this.snackBar.open(error, 'Chiudi', { duration: 10000 });
          return EMPTY;
        }),
        finalize(() => this.isLoading$.next(false)),
      )
      .subscribe();
  }
}
