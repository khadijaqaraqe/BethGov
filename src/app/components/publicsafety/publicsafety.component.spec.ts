import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicsafetyComponent } from './publicsafety.component';

describe('PublicsafetyComponent', () => {
  let component: PublicsafetyComponent;
  let fixture: ComponentFixture<PublicsafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicsafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicsafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
