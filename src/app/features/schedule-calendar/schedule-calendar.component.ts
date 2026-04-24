import { Component } from '@angular/core';
import { ScheduleCalendarToolbarComponent } from './components/schedule-calendar-toolbar/schedule-calendar-toolbar.component';
import { ScheduleCalendarContainerComponent } from './components/schedule-calendar-container/schedule-calendar-container.component';

@Component({
  selector: 'app-schedule-calendar',
  standalone: true,
  imports: [
    ScheduleCalendarToolbarComponent,
    ScheduleCalendarContainerComponent,
  ],
  templateUrl: './schedule-calendar.component.html',
  styleUrl: './schedule-calendar.component.scss',
})
export class ScheduleCalendarComponent {}
