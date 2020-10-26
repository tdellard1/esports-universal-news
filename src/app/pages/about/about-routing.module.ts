import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { AboutServerComponent } from "./about-server/about-server.component";
import { AboutWebsiteComponent } from "./about-website/about-website.component";
import { AboutCampaignComponent } from "./about-campaign/about-campaign.component";
import { AboutSponsorshipsComponent } from "./about-sponsorships/about-sponsorships.component";

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'server',
    component: AboutServerComponent
  },
  {
    path: 'website',
    component: AboutWebsiteComponent
  },
  {
    path: 'campaign',
    component: AboutCampaignComponent
  },
  {
    path: 'sponsorships',
    component: AboutSponsorshipsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
