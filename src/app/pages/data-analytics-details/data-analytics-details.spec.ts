import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalyticsDetails } from './data-analytics-details';

describe('DataAnalyticsDetails', () => {
  let component: DataAnalyticsDetails;
  let fixture: ComponentFixture<DataAnalyticsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAnalyticsDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAnalyticsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
