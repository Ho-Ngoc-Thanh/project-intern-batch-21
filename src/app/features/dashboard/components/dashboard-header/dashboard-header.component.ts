import { CommonModule } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [ CommonModule, SvgIconComponent],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
export class DashboardHeaderComponent {
 @Input() dashboardData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

   loadData() {
    this.http.get('assets/data/dashboard.json').subscribe((res) => {
      this.dashboardData = res;
      console.log('data properties: ', this.dashboardData);
    });
  }
}
