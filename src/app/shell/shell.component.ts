import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy } from '@shared';
import { distinctUntilChanged } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements AfterViewInit {
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(distinctUntilChanged());

  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterViewInit(): void {
    this.breakpoint$.subscribe((breakpoint) => {
      if (breakpoint.matches) {
        this.sidenav.close();
      } else {
        this.sidenav.open();
      }
    });
  }
}
