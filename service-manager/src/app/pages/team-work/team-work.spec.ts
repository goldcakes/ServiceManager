import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWork } from './team-work';

describe('TeamWork', () => {
  let component: TeamWork;
  let fixture: ComponentFixture<TeamWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
