import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsTabNewItemComponent } from './vs-tab-new-item.component';

describe('VsTabNewItemComponent', () => {
  let component: VsTabNewItemComponent;
  let fixture: ComponentFixture<VsTabNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsTabNewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsTabNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
