import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-dashboard-bottom',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './dashboard-bottom.component.html',
  styleUrl: './dashboard-bottom.component.scss'
})
export class DashboardBottomComponent {

  featuredProperty = {
    badge: 'Featured Property',
    title: 'Luxury Penthouse',
    location: 'Downtown District, Manhattan',
    priceLabel: 'Asking Price',
    price: '$4.2M',
    buttonText: 'View Details',
    image: 'https://images.unsplash.com/photo-1609766857326-18a204c2cf31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  };

  meetingInfo = {
    title: 'Meeting with Arc Company',
    time: 'Time: 02:00 pm – 04:00 pm',
    greeting: 'Good Morning, Sarah.',
    message: 'HOW Can I assist you today?',
    actionText: 'Start Meeting'
  };

 recentActivities = [
  {
    title: 'New offer received',
    subtitle: 'Beach House, Malibu',
    time: '5m ago',
    icon: 'assets/icons/sidebar/dashboard.svg',
    iconBg: 'bg-[#eafaf2]',
    iconColor: 'text-[#22c55e]',
    type: 'svg'
  },
  {
    title: 'Viewing scheduled',
    subtitle: 'Luxury Penthouse',
    time: '1h ago',
    icon: 'pi pi-calendar',
    iconBg: 'bg-[#eef4ff]',
    iconColor: 'text-[#3b82f6]',
    type: 'class'
  },
  {
    title: 'Property sold',
    subtitle: 'Modern Villa, $2.4M',
    time: '3h ago',
    icon: 'pi pi-chart-line',
    iconBg: 'bg-[#f5edff]',
    iconColor: 'text-[#a855f7]',
    type: 'class'
  },
  {
    title: 'New client added',
    subtitle: 'Michael Anderson',
    time: '5h ago',
    icon: 'pi pi-users',
    iconBg: 'bg-[#fff3ea]',
    iconColor: 'text-[#f97316]',
    type: 'class'
  }
];
}
