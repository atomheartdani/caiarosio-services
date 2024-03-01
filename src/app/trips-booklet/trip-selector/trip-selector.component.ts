import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripHeader } from '@app/@shared/models/trips.model';
import { TripsService } from '@app/@shared/services/trips.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trip-selector',
  templateUrl: './trip-selector.component.html',
  styleUrl: './trip-selector.component.scss',
})
export class TripSelectorComponent implements OnInit {
  selectedYear: number;
  trips$: Observable<TripHeader[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tripsService: TripsService,
  ) {
    this.selectedYear = Number(this.activatedRoute.snapshot.paramMap.get('year'));
  }

  ngOnInit(): void {
    this.trips$ = this.tripsService.getTripsByYear(this.selectedYear);
  }

  navigate(element: number): void {
    this.router.navigate(['trips', element]);
  }
}
