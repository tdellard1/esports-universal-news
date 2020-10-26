import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCampaignComponent } from './about-campaign.component';

describe('AboutCampaignComponent', () => {
  let component: AboutCampaignComponent;
  let fixture: ComponentFixture<AboutCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
