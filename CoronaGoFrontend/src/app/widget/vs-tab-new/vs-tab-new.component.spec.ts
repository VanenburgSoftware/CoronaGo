import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsTabNewComponent } from './vs-tab-new.component';

describe('VsTabNewComponent', () => {
  let component: VsTabNewComponent;
  let fixture: ComponentFixture<VsTabNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsTabNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsTabNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
