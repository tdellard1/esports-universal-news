import { Component, OnInit } from '@angular/core';
import { eventsNA } from "../../../common/mock/mock-data";

@Component({
  selector: 'app-ranked-events',
  templateUrl: './ranked-events.component.html',
  styleUrls: ['./ranked-events.component.scss']
})
export class RankedEventsComponent implements OnInit {
  events: any[] = eventsNA;

  constructor() { }

  ngOnInit(): void {
  }

}
