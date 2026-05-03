import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule-calendar-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SvgIconComponent,
    DropdownModule,
    TooltipModule,
    CalendarModule,
  ],
  templateUrl: './schedule-calendar-create.component.html',
  styleUrl: './schedule-calendar-create.component.scss',
})
export class ScheduleCalendarCreateComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  createForm!: FormGroup;
  isColorPickerOpen = false;

  mockData = {
    id: 'DRT-20452',
    title: 'Volunteer Day',
    description: '',
    lead: {
      name: 'Alice Scott',
      avatar: 'https://ui-avatars.com/api/?name=Alice+Scott&background=random',
    },
    start: new Date(2024, 6, 10, 13, 0),
    end: new Date(2024, 6, 10, 13, 30),
    visibility: 'Public',
    color: '#8B5CF6',
    createdDate: '', // Will be set in ngOnInit
    createdBy: 'Tony Pham',
    reminder: '5 min before',
    commentUser: 'Tony Pham',
  };

  visibilityOptions = [
    { label: 'Public', value: 'Public' },
    { label: 'Private', value: 'Private' },
    { label: 'Internal', value: 'Internal' },
  ];

  reminderOptions = [
    { label: '5 min before', value: '5 min before' },
    { label: '10 min before', value: '10 min before' },
    { label: '15 min before', value: '15 min before' },
    { label: '30 min before', value: '30 min before' },
    { label: '1 hour before', value: '1 hour before' },
    { label: 'None', value: 'None' },
  ];

  colorOptions = ['#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#3B82F6'];

  constructor(private fb: FormBuilder, private scheduleService: ScheduleService) {}

  ngOnInit() {
    // Set current time for createdDate
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const formattedTime = now.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    this.mockData.createdDate = `${formattedDate} ${formattedTime}`;

    this.createForm = this.fb.group({
      description: [this.mockData.description],
      start: [this.mockData.start],
      end: [this.mockData.end],
      visibility: [this.mockData.visibility],
      color: [this.mockData.color],
      reminder: [this.mockData.reminder],
      comment: [''],
    });
  }

  onClose() {
    this.close.emit();
  }

  toggleColorPicker() {
    this.isColorPickerOpen = !this.isColorPickerOpen;
  }

  selectColor(color: string) {
    this.createForm.get('color')?.setValue(color);
    this.isColorPickerOpen = false;
  }

  onSave() {
    const formValue = this.createForm.value;
    const newEvent = {
      title: this.mockData.title,
      description: formValue.description,
      start: formValue.start,
      end: formValue.end,
      backgroundColor: formValue.color,
      textColor: '#ffffff',
      lead: this.mockData.lead,
      visibility: formValue.visibility,
      color: formValue.color,
      createdDate: this.mockData.createdDate,
      createdBy: this.mockData.createdBy,
      reminder: formValue.reminder,
    };

    this.scheduleService.addEvent(newEvent);
    this.onClose();
  }
}
