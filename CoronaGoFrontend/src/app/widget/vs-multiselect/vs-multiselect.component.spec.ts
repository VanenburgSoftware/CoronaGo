import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsMultiselectComponent } from './vs-multiselect.component';

describe('VsMultiselectComponent', () => {
  let component: VsMultiselectComponent;
  let fixture: ComponentFixture<VsMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
