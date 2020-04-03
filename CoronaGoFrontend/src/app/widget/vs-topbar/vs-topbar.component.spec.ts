import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsTopbarComponent } from './vs-topbar.component';

describe('TopbarComponent', () => {
  let component: VsTopbarComponent;
  let fixture: ComponentFixture<VsTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
