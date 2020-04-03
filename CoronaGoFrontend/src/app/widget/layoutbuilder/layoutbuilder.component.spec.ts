import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutbuilderComponent } from './layoutbuilder.component';

describe('LayoutbuilderComponent', () => {
  let component: LayoutbuilderComponent;
  let fixture: ComponentFixture<LayoutbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
