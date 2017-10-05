import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular2TokenService } from 'angular2-token'

import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [Angular2TokenService] }
]

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
