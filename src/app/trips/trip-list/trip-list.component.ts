import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TripsService } from '@app/@shared/services/trips.service';
import { tap } from 'rxjs';
import { TripListDataSource } from './trip-list.datasource';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrl: './trip-list.component.scss',
})
export class TripListComponent implements OnInit, AfterViewInit {
  columns = ['title', 'date', 'region', 'zone', 'actions'];
  dataSource: TripListDataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private router: Router,
    private tripsService: TripsService,
  ) {}

  ngOnInit(): void {
    this.dataSource = new TripListDataSource(this.tripsService);
    this.refresh();
  }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(tap(() => this.refresh())).subscribe();
  }

  edit(id: number): void {
    this.router.navigate(['trips', id]);
  }

  refresh(): void {
    this.dataSource.loadData('', this.paginator.pageIndex, this.paginator.pageSize); // TODO set filters and paging
  }
}
