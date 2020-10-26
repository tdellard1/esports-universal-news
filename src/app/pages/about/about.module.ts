import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from "./about-routing.module";
import { AboutServerComponent } from './about-server/about-server.component';
import { AboutWebsiteComponent } from './about-website/about-website.component';
import { AboutCampaignComponent } from './about-campaign/about-campaign.component';
import { AboutSponsorshipsComponent } from './about-sponsorships/about-sponsorships.component';
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [AboutComponent, AboutServerComponent, AboutWebsiteComponent, AboutCampaignComponent, AboutSponsorshipsComponent],
    imports: [
        CommonModule,
        AboutRoutingModule,
        MatButtonModule,
    ]
})
export class AboutModule { }
