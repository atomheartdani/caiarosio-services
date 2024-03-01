import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trip, TripHeader } from '../models/trips.model';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  getAllYears(): Observable<number[]> {
    return of([2025, 2024, 2023, 2022]);
  }

  getTrip(id: number): Observable<Trip> {
    return of({
      id: 1,
      date: '2024-04-01',
      title: 'Titolo gita 1',
      region: 'Lombardia',
      zone: 'Valmalenco',
      difficulty: 'EE',
      estimatedTime: '4 ore e 30',
      elevationGain: '1000',
      maxHeight: 2560,
      gear: 'Normale attrezzatura da escursionismo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    });
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
