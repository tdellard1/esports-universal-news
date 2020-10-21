import { Component, OnInit } from '@angular/core';
import { teamsNA } from 'src/app/common/mock/mock-data';

@Component({
  selector: 'app-team-ranking',
  templateUrl: './team-ranking.component.html',
  styleUrls: ['./team-ranking.component.scss']
})
export class TeamRankingComponent implements OnInit {
  teams: any[] = teamsNA;

  constructor() {}

  ngOnInit(): void {
  }
}
