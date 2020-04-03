import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsFreehandComponent } from './vs-freehand.component';

describe('VsFreehandComponent', () => {
  let component: VsFreehandComponent;
  let fixture: ComponentFixture<VsFreehandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsFreehandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsFreehandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
