import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestMapComponent } from './invest-map.component';

describe('InvestMapComponent', () => {
  let component: InvestMapComponent;
  let fixture: ComponentFixture<InvestMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
