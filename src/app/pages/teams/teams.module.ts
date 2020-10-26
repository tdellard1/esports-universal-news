import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from "./teams.component";
import { TeamsRoutingModule } from "./teams-routing.module";
import { TeamRankingComponent } from './team-ranking/team-ranking.component';
import { MatCardModule } from "@angular/material/card";
import { TeamListComponent } from './team-list/team-list.component';
import { MatButtonToggleModule } from "@angular/material/button-toggle";



@NgModule({
  declarations: [TeamsComponent, TeamRankingComponent, TeamListComponent],
    imports: [
        CommonModule,
        TeamsRoutingModule,
        MatCardModule,
        MatButtonToggleModule
    ]
})
export class TeamsModule { }
