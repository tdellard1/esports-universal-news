import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EventsComponent } from "./events.component";
import { RankedEventsComponent } from "./ranked-events/ranked-events.component";

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
  {
    path: 'ranked',
    component: RankedEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
