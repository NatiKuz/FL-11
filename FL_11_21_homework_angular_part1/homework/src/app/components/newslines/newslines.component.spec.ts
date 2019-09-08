import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslinesComponent } from './newslines.component';

describe('NewslinesComponent', () => {
  let component: NewslinesComponent;
  let fixture: ComponentFixture<NewslinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
