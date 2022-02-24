import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerCurrencyComponent } from './per-currency.component';

describe('PerCurrencyComponent', () => {
  let component: PerCurrencyComponent;
  let fixture: ComponentFixture<PerCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
