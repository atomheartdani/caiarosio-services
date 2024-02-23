import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-trip-selector',
  templateUrl: './trip-selector.component.html',
  styleUrl: './trip-selector.component.scss',
})
export class TripSelectorComponent {
  trips$ = of([
    { id: 1, date: '2024-04-01', title: 'Titolo gita 1' },
    { id: 2, date: '2024-04-02', title: 'Titolo gita 2' },
    { id: 3, date: '2024-04-03', title: 'Titolo gita 3' },
    { id: 4, date: '2024-04-04', title: 'Titolo gita 4' },
    { id: 5, date: '2024-04-05', title: 'Titolo gita 5' },
    { id: 6, date: '2024-04-06', title: 'Titolo gita 6' },
  ]);

  constructor(private router: Router) {}

  navigate(element: number): void {
    this.router.navigate(['trips', element]);
  }
}
