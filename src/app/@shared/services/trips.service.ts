import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TripHeader } from '../models/trips.model';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  getAllYears(): Observable<number[]> {
    return of([2025, 2024, 2023, 2022]);
  }

  getTripsByYear(year: number): Observable<TripHeader[]> {
    return of([
      { id: 1, date: '2024-04-01', title: 'Titolo gita 1' },
      { id: 2, date: '2024-04-02', title: 'Titolo gita 2' },
      { id: 3, date: '2024-04-03', title: 'Titolo gita 3' },
      { id: 4, date: '2024-04-04', title: 'Titolo gita 4' },
      { id: 5, date: '2024-04-05', title: 'Titolo gita 5' },
      { id: 6, date: '2024-04-06', title: 'Titolo gita 6' },
    ]);
  }
}
