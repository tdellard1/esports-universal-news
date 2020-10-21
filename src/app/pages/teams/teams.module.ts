import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from "./teams.component";
import { TeamsRoutingModule } from "./teams-routing.module";
import { TeamRankingComponent } from './team-ranking/team-ranking.component';
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [TeamsComponent, TeamRankingComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MatCardModule
  ]
})
export class TeamsModule { }
