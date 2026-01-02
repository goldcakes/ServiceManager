import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWork } from './all-work';

describe('AllWork', () => {
  let component: AllWork;
  let fixture: ComponentFixture<AllWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
