import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonDetails } from './python-details';

describe('PythonDetails', () => {
  let component: PythonDetails;
  let fixture: ComponentFixture<PythonDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythonDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(PythonDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
