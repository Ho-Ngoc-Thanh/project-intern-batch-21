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
    createdDate: '07/10/2024 10:50',
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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
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
    console.log('Saving data:', this.createForm.value);
    this.onClose();
  }
}
