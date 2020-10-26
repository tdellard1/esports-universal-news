import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TeamsComponent } from "./teams.component";
import { TeamRankingComponent } from "./team-ranking/team-ranking.component";

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent
  },
  {
    path: ':region/teams',
    component: TeamRankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
