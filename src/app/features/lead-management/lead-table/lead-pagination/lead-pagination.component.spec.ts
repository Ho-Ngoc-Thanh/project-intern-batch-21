import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadPaginationComponent } from './lead-pagination.component';

describe('LeadPaginationComponent', () => {
  let component: LeadPaginationComponent;
  let fixture: ComponentFixture<LeadPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
