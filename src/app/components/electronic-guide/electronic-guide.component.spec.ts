import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicGuideComponent } from './electronic-guide.component';

describe('ElectronicGuideComponent', () => {
  let component: ElectronicGuideComponent;
  let fixture: ComponentFixture<ElectronicGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
