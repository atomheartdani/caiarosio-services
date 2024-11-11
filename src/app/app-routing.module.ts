import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'trips',
    loadChildren: () => import('./trips/trips.module').then((m) => m.TripsModule),
  },
  {
    path: 'tripsbooklet',
    loadChildren: () => import('./trips-booklet/trips-booklet.module').then((m) => m.TripsBookletModule),
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
