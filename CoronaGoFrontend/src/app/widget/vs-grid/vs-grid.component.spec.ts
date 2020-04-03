import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsGridComponent } from './vs-grid.component';

describe('VsGridComponent', () => {
  let component: VsGridComponent;
  let fixture: ComponentFixture<VsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
