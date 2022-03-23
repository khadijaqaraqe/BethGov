import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBethlehemComponent } from './about-bethlehem.component';

describe('AboutBethlehemComponent', () => {
  let component: AboutBethlehemComponent;
  let fixture: ComponentFixture<AboutBethlehemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBethlehemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBethlehemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
