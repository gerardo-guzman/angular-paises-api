import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerNameComponent } from './per-name.component';

describe('PerNameComponent', () => {
  let component: PerNameComponent;
  let fixture: ComponentFixture<PerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
