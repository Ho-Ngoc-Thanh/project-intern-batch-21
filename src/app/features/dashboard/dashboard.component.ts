import { Component } from '@angular/core';
import { FeaturedPropertiesComponent } from './components/featured-properties/featured-properties.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FeaturedPropertiesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
