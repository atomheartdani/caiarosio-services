import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from '@app/@shared/services/trips.service';
import { BehaviorSubject, Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrl: './year-selector.component.scss',
})
export class YearSelectorComponent implements OnInit {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  years$: Observable<number[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tripsService: TripsService,
  ) {}

  ngOnInit(): void {
    this.years$ = this.tripsService.getAllYears().pipe(finalize(() => this.isLoading$.next(false)));
  }

  navigate(element: number): void {
    this.router.navigate([element], { relativeTo: this.activatedRoute });
  }
}
