import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCalendarToolbarComponent } from './schedule-calendar-toolbar.component';

describe('ScheduleCalendarToolbarComponent', () => {
  let component: ScheduleCalendarToolbarComponent;
  let fixture: ComponentFixture<ScheduleCalendarToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleCalendarToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleCalendarToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
