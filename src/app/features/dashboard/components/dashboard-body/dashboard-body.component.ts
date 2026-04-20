import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';
import { ChartItem, ChartResponse } from 'src/app/models/interfaces/chart.interface';
import {
  createBarChartData,
  createInitialBarChartData,
  propertyOverviewBarChartOptions
} from './dashboard-body-chart.config';
import { propertyOverviewPlugin } from './property-overview-chart.plugin';

Chart.register(...registerables, annotationPlugin, propertyOverviewPlugin);

interface PropertyType {
  name: string;
  value: number;
  color: string;
}

@Component({
  selector: 'app-dashboard-body',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './dashboard-body.component.html',
  styleUrl: './dashboard-body.component.scss'
})
export class DashboardBodyComponent implements OnInit {
  statistics = {
    totalProperties: 847,
    growth: 13,
    progress: 78
  };

  propertyTypes: PropertyType[] = [
    { name: 'Luxury Villa', value: 124, color: 'bg-emerald-500' },
    { name: 'Beach House', value: 67, color: 'bg-violet-500' },
    { name: 'Modern Condo', value: 89, color: 'bg-blue-500' },
    { name: 'Penthouse', value: 45, color: 'bg-red-500' }
  ];

  maxValue = Math.max(...this.propertyTypes.map(item => item.value));
  chartItems: ChartItem[] = [];

  public barChartType: 'bar' = 'bar';
  public barChartData = createInitialBarChartData();
  public barChartOptions = propertyOverviewBarChartOptions;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData(): void {
    this.http.get<ChartResponse>('assets/data/chart.json').subscribe({
      next: (response) => {
        this.chartItems = response.chartData;
        this.barChartData = createBarChartData(this.chartItems);
      },
      error: (error) => {
        console.error('Lỗi đọc chart.json:', error);
      }
    });
  }

  getPropertyBarWidth(value: number): number {
    return (value / this.maxValue) * 100;
  }
}