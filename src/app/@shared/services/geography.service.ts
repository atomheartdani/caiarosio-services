import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Nation } from '../models/geography.model';

@Injectable({
  providedIn: 'root',
})
export class GeographyService {
  getNations(): Observable<Nation[]> {
    return of([
      { id: 1, name: 'Italia', isForeign: false },
      { id: 2, name: 'Francia', isForeign: true },
      { id: 3, name: 'Svizzera', isForeign: true },
    ]);
  }
}
