import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankedEventsComponent } from './ranked-events.component';

describe('RankedEventsComponent', () => {
  let component: RankedEventsComponent;
  let fixture: ComponentFixture<RankedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
