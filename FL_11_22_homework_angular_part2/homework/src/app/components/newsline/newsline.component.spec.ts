import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslineComponent } from './newsline.component';

describe('NewslineComponent', () => {
  let component: NewslineComponent;
  let fixture: ComponentFixture<NewslineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
