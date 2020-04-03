import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsTabComponent } from './vs-tab.component';

describe('VsTabComponent', () => {
  let component: VsTabComponent;
  let fixture: ComponentFixture<VsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
