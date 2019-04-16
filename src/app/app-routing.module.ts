import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: false, // Turn this on to log routing events to the console
  scrollPositionRestoration: 'enabled'
  // ,preloadingStrategy: PreloadAllModules
};


@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
