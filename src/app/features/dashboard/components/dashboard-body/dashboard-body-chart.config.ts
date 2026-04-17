// import { ChartConfiguration, ChartOptions } from 'chart.js';
// import { ChartItem } from 'src/app/models/interfaces/chart.interface';

// export function createInitialBarChartData(): ChartConfiguration<'bar'>['data'] {
//   return {
//     labels: [],
//     datasets: [
//       {
//         data: [],
//         label: 'Sales',
//         backgroundColor: '#0ea56f',
//         borderRadius: {
//           topLeft: 5,
//           topRight: 5,
//           bottomLeft: 0,
//           bottomRight: 0
//         },
//         borderSkipped: 'bottom',
//         barThickness: 80
//       }
//     ]
//   };
// }

// export function createBarChartData(items: ChartItem[]): ChartConfiguration<'bar'>['data'] {
//   return {
//     labels: items.map(item => item.month),
//     datasets: [
//       {
//         data: items.map(item => item.value),
//         label: 'Sales',
//         backgroundColor: '#0ea56f',
//         borderRadius: {
//           topLeft: 14,
//           topRight: 14,
//           bottomLeft: 0,
//           bottomRight: 0
//         },
//         borderSkipped: 'bottom',
//         barThickness: 80
//       }
//     ]
//   };
// }

// export const propertyOverviewBarChartOptions: ChartOptions<'bar'> = {
//   responsive: true,
//   maintainAspectRatio: false,
//   animation: {
//     duration: 700
//   },
//   layout: {
//     padding: {
//       top: 0,
//       bottom: 0,
//       left: 0,
//       right: 0
//     }
//   },
//   plugins: {
//     legend: {
//       display: false
//     },
//     tooltip: {
//       enabled: true,
//       displayColors: false,
//       backgroundColor: '#1f2937',
//       titleColor: '#ffffff',
//       bodyColor: '#ffffff'
//     }
//   },
//   scales: {
//     x: {
//       display: false,
//       offset: true
//     },
//     y: {
//       min: 0,
//       max: 600,
//       beginAtZero: true,
//       grace: 0,
//        afterFit(scale) {
//     scale.width = 24;
//   },
//       ticks: {
//         stepSize: 100,
//         color: '#767A84',
//         font: {
//           size: 12
//         }, 
//          padding: 0
//       },
//       grid: {
//         display: false
//       },
//       border: {
//         display: false
//       }
//     }
//   }
// };


import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ChartItem } from 'src/app/models/interfaces/chart.interface';

export function createInitialBarChartData(): ChartConfiguration<'bar'>['data'] {
  return {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Sales',
        backgroundColor: '#ffffff',
        borderColor: '#d1d5db',
  borderWidth: 1,
        borderRadius: {
          topLeft: 14,
          topRight: 14,
          bottomLeft: 0,
          bottomRight: 0
        },
        borderSkipped: 'bottom',
        barThickness: 88
      }
    ]
  };
}

export function createBarChartData(items: ChartItem[]): ChartConfiguration<'bar'>['data'] {
  return {
    labels: items.map(item => item.month),
    datasets: [
      {
        data: items.map(item => item.value),
        label: 'Sales',
        backgroundColor: '#0ea56f',
        borderRadius: {
          topLeft: 14,
          topRight: 14,
          bottomLeft: 0,
          bottomRight: 0
        },
        borderSkipped: 'bottom',
        barThickness: 90
      }
    ]
  };
}

export const propertyOverviewBarChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 700
  },
  layout: {
    padding: {
      top: 0,
      bottom: -10,
      left: 1,
      right: -2
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      displayColors: false,
      backgroundColor: '#1f2937',
      titleColor: '#ffffff',
      bodyColor: '#ffffff'
    }
  },
  scales: {
    x: {
      display: false,
      offset: true
    },
    y: {
      min: 0,
      max: 600,
      beginAtZero: true,
      grace: 0,
      ticks: {
        stepSize: 100,
        color: '#767A84',
        font: {
          size: 12
        },
        padding: 0
      },
      grid: {
        display: false
      },
      border: {
        display: false
      }
    }
  }
};