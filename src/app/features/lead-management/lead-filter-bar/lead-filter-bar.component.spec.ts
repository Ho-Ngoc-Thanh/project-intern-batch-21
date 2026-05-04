import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadFilterBarComponent } from './lead-filter-bar.component';

describe('LeadFilterBarComponent', () => {
  let component: LeadFilterBarComponent;
  let fixture: ComponentFixture<LeadFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadFilterBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
