import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsCaptionbarComponent } from './vs-captionbar.component';

describe('VsCaptionbarComponent', () => {
  let component: VsCaptionbarComponent;
  let fixture: ComponentFixture<VsCaptionbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsCaptionbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsCaptionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
