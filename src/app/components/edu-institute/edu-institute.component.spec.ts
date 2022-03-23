import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduInstituteComponent } from './edu-institute.component';

describe('EduInstituteComponent', () => {
  let component: EduInstituteComponent;
  let fixture: ComponentFixture<EduInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduInstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
