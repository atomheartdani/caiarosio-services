import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrl: './year-selector.component.scss',
})
export class YearSelectorComponent {
  years$ = of([2025, 2024, 2023, 2022]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  navigate(element: number): void {
    this.router.navigate([element], { relativeTo: this.activatedRoute });
  }
}
