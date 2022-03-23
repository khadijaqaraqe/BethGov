import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BethlehemNumbersComponent } from './bethlehem-numbers.component';

describe('BethlehemNumbersComponent', () => {
  let component: BethlehemNumbersComponent;
  let fixture: ComponentFixture<BethlehemNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BethlehemNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BethlehemNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
