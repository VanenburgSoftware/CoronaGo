import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotYetAssignedListMobileViewComponent } from './not-yet-assigned-list-mobile-view.component';

describe('NotYetAssignedListMobileViewComponent', () => {
  let component: NotYetAssignedListMobileViewComponent;
  let fixture: ComponentFixture<NotYetAssignedListMobileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotYetAssignedListMobileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotYetAssignedListMobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
