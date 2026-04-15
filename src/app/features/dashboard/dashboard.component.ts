import { Component } from '@angular/core';
import { DashboardBodyComponent } from './components/dashboard-body/dashboard-body.component';
import { DashboardBottomComponent } from './components/dashboard-bottom/dashboard-bottom.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { FeaturedPropertiesComponent } from './components/featured-properties/featured-properties.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FeaturedPropertiesComponent,  DashboardHeaderComponent, DashboardBodyComponent,DashboardBottomComponent],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
