import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSponsorshipsComponent } from './about-sponsorships.component';

describe('AboutSponsorshipsComponent', () => {
  let component: AboutSponsorshipsComponent;
  let fixture: ComponentFixture<AboutSponsorshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSponsorshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSponsorshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
