import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryViewerComponent } from './country-viewer.component';

describe('CountryViewerComponent', () => {
  let component: CountryViewerComponent;
  let fixture: ComponentFixture<CountryViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
