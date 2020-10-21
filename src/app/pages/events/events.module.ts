import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from "./events-routing.module";
import { RankedEventsComponent } from './ranked-events/ranked-events.component';
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [EventsComponent, RankedEventsComponent],
    imports: [
        CommonModule,
        EventsRoutingModule,
        MatCardModule,
    ]
})
export class EventsModule {}
