import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCalendarContainerComponent } from './schedule-calendar-container.component';

describe('ScheduleCalendarContainerComponent', () => {
  let component: ScheduleCalendarContainerComponent;
  let fixture: ComponentFixture<ScheduleCalendarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleCalendarContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleCalendarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
