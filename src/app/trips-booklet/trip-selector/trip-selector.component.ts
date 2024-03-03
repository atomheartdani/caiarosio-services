import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TripHeader } from '@app/@shared/models/trips.model';
import { TripsService } from '@app/@shared/services/trips.service';
import { TripNewComponent } from '@app/trips/trip-new/trip-new.component';
import { BehaviorSubject, Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-trip-selector',
  templateUrl: './trip-selector.component.html',
  styleUrl: './trip-selector.component.scss',
})
export class TripSelectorComponent implements OnInit {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  selectedYear: number;
  trips$: Observable<TripHeader[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private tripsService: TripsService,
  ) {
    this.selectedYear = Number(this.activatedRoute.snapshot.paramMap.get('year'));
  }

  ngOnInit(): void {
    this.trips$ = this.tripsService.getTripsByYear(this.selectedYear).pipe(finalize(() => this.isLoading$.next(false)));
  }

  navigate(element: number): void {
    this.router.navigate(['trips', element]);
  }

  newTrip(): void {
    const dialogRef = this.dialog.open(TripNewComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result > 0) {
        this.navigate(result);
      }
    });
  }
}
