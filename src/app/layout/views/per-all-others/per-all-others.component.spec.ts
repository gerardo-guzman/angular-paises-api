import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerAllOthersComponent } from './per-all-others.component';

describe('PerAllOthersComponent', () => {
  let component: PerAllOthersComponent;
  let fixture: ComponentFixture<PerAllOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerAllOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerAllOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
