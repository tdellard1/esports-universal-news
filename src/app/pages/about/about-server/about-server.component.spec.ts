import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServerComponent } from './about-server.component';

describe('AboutServerComponent', () => {
  let component: AboutServerComponent;
  let fixture: ComponentFixture<AboutServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
