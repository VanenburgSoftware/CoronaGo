import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsMenuComponent } from './vs-menu.component';

describe('VsMenuComponent', () => {
  let component: VsMenuComponent;
  let fixture: ComponentFixture<VsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
