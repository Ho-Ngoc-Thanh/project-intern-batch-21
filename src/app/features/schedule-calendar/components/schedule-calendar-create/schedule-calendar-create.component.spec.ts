import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCalendarCreateComponent } from './schedule-calendar-create.component';

describe('ScheduleCalendarCreateComponent', () => {
  let component: ScheduleCalendarCreateComponent;
  let fixture: ComponentFixture<ScheduleCalendarCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleCalendarCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleCalendarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
