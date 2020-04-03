import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsScannerComponent } from './vs-scanner.component';

describe('VsScannerComponent', () => {
  let component: VsScannerComponent;
  let fixture: ComponentFixture<VsScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsScannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
