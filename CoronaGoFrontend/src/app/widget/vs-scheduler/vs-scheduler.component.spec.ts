import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsSchedulerComponent } from './vs-scheduler.component';

describe('VsSchedulerComponent', () => {
  let component: VsSchedulerComponent;
  let fixture: ComponentFixture<VsSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
