import { Component, OnInit } from '@angular/core';
import { teamsNA } from 'src/app/common/mock/mock-data';
import { ActivatedRoute, UrlSegment } from "@angular/router";



@Component({
  selector: 'app-team-ranking',
  templateUrl: './team-ranking.component.html',
  styleUrls: ['./team-ranking.component.scss']
})
export class TeamRankingComponent implements OnInit {
  teamListDisplay: string = 'top';
  region: string;
  topTeams: any[] = teamsNA.slice(0, 10);
  allTeams: any[] = teamsNA.reverse();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((urls: UrlSegment[]) => {
      this.region = urls[0].path;
    });
  }
}
