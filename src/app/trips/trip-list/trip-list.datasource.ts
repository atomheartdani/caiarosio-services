import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Page } from '@app/@shared/models/page.model';
import { Trip } from '@app/@shared/models/trips.model';
import { TripsService } from '@app/@shared/services/trips.service';
import { BehaviorSubject, EMPTY, Observable, catchError, finalize, map } from 'rxjs';

export class TripListDataSource extends DataSource<Trip> {
  data$ = new BehaviorSubject<Trip[]>([]);
  hasError$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  totalElements$ = new BehaviorSubject<number>(0);

  constructor(private tripsService: TripsService) {
    super();
  }

  override connect(collectionViewer: CollectionViewer): Observable<readonly Trip[]> {
    return this.data$.asObservable();
  }

  override disconnect(collectionViewer: CollectionViewer): void {
    this.data$.complete();
    this.hasError$.complete();
    this.isLoading$.complete();
    this.totalElements$.complete();
  }

  loadData(filter: string = '', pageIndex: number = 0, pageSize: number = 25): void {
    this.isLoading$.next(true);
    this.hasError$.next(false);

    this.tripsService
      .getTrips(filter, pageIndex, pageSize)
      .pipe(
        map((response: Page<Trip>) => {
          this.data$.next(response.content);
          this.totalElements$.next(response.total);
        }),
        catchError(() => {
          this.hasError$.next(true);
          return EMPTY;
        }),
        finalize(() => this.isLoading$.next(false)),
      )
      .subscribe();
  }
}
