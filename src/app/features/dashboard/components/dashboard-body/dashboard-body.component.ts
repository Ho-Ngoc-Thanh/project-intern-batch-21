import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartItem, ChartResponse } from 'src/app/models/interfaces/chart.interface';


@Component({
  selector: 'app-dashboard-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-body.component.html',
  styleUrl: './dashboard-body.component.scss'
})
export class DashboardBodyComponent implements OnInit {



  statistics = {
  totalProperties: 847,
  growth: 13,
  progress: 78
};


propertyTypes = [
  { name: 'Luxury Villa', value: 124, color: 'bg-brand-primary' },
  { name: 'Beach House', value: 67, color: 'bg-[#8b5cf6]' },
  { name: 'Modern Condo', value: 89, color: 'bg-[#4f86f7]' },
  { name: 'Penthouse', value: 45, color: 'bg-[#ff1919]' }
];


  chartData: ChartItem[] = [];
   constructor(private http: HttpClient) {}
     ngOnInit(): void {
    this.loadChartData();
  }
     loadChartData(): void {
    this.http.get<ChartResponse>('assets/data/chart.json').subscribe({
      next: (response) => {
        this.chartData = response.chartData;
        console.log('Chart data:', this.chartData);
      },
      error: (error) => {
        console.error('Lỗi đọc chart.json:', error);
      }
    });
  }

  maxValue = Math.max(...this.propertyTypes.map(x => x.value));
}


