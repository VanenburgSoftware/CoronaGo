import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsNavItemComponent } from './vs-nav-item.component';

describe('VsNavItemComponent', () => {
  let component: VsNavItemComponent;
  let fixture: ComponentFixture<VsNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
