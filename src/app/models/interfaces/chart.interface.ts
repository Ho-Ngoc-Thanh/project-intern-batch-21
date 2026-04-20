export interface ChartItem {
  month: string;
  value: number;
}

export interface ChartResponse {
  chartData: ChartItem[];
}