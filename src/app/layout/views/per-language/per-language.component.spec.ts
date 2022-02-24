import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerLanguageComponent } from './per-language.component';

describe('PerLanguageComponent', () => {
  let component: PerLanguageComponent;
  let fixture: ComponentFixture<PerLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
