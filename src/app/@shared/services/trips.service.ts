import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Page } from '../models/page.model';
import { Difficulty, Trip, TripHeader } from '../models/trips.model';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  createTrip(toSave: TripHeader): Observable<number> {
    return of(1);
  }

  getAllYears(): Observable<number[]> {
    return of([2025, 2024, 2023, 2022]);
  }

  getDifficulties(): Observable<Difficulty[]> {
    return of(Object.values(Difficulty));
  }

  getTrip(id: number): Observable<Trip[]> {
    return of([this.getFullTrip(), this.getFullTrip()]);
  }

  getTrips(filter: string, pageIndex: number, pageSize: number): Observable<Page<Trip>> {
    return of({
      total: 10,
      content: [
        this.getFullTrip(),
        this.getFullTrip(),
        this.getFullTrip(),
        this.getFullTrip(),
        this.getFullTrip(),
        this.getFullTrip(),
        this.getFullTrip(),
        this.getFullTrip(),
        this.getFullTrip(),
        this.getFullTrip(),
      ],
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

  // TODO return type
  save(toSave: Trip[]): Observable<void> {
    // TODO
    throw new Error('Method not implemented.');
  }

  // TODO delete this
  private getFullTrip(): Trip {
    return {
      id: 1,
      groupId: 1,
      date: '2024-04-01',
      title: 'Titolo gita 1',
      nation: { id: 1, name: 'Italia', isForeign: false },
      region: 'Lombardia',
      zone: 'Valmalenco',
      difficulty: Difficulty.EE,
      estimatedTime: '4 ore e 30',
      elevationGain: '1000',
      maxHeight: 2560,
      gear: 'Normale attrezzatura da escursionismo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
  }
}
