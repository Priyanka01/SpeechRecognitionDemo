import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingTwoDComponent } from './mapping-two-d.component';

describe('MappingTwoDComponent', () => {
  let component: MappingTwoDComponent;
  let fixture: ComponentFixture<MappingTwoDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingTwoDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingTwoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
