import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotYetAssignedComponent } from './not-yet-assigned.component';

describe('NotYetAssignedComponent', () => {
  let component: NotYetAssignedComponent;
  let fixture: ComponentFixture<NotYetAssignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotYetAssignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotYetAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
