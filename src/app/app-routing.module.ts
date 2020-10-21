import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from "./pages/demo/demo.component";
import { HomeComponent } from "./pages/home/home.component";
import { AnnouncementsComponent } from "./pages/announcements/announcements.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'announcements',
    component: AnnouncementsComponent
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/teams/teams.module').then(m => m.TeamsModule)
  },
  {
    path: 'streamers',
    loadChildren: () => import('./pages/streamers/streamers.module').then(m => m.StreamersModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'demo',
    component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      anchorScrolling: "enabled",
      onSameUrlNavigation: "reload"
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
