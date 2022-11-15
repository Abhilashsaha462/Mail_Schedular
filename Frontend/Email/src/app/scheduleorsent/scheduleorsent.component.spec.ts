import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleorsentComponent } from './scheduleorsent.component';

describe('ScheduleorsentComponent', () => {
  let component: ScheduleorsentComponent;
  let fixture: ComponentFixture<ScheduleorsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleorsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleorsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
