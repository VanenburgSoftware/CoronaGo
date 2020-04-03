import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsAutosuggestComponent } from './vs-autosuggest.component';

describe('VsAutosuggestComponent', () => {
  let component: VsAutosuggestComponent;
  let fixture: ComponentFixture<VsAutosuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsAutosuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsAutosuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
