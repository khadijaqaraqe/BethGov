import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernorWordComponent } from './governor-word.component';

describe('GovernorWordComponent', () => {
  let component: GovernorWordComponent;
  let fixture: ComponentFixture<GovernorWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernorWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernorWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
