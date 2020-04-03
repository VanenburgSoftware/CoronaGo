import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsActionbarComponent } from './vs-actionbar.component';

describe('VsActionbarComponent', () => {
  let component: VsActionbarComponent;
  let fixture: ComponentFixture<VsActionbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsActionbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsActionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
