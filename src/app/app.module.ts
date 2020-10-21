import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './pages/demo/demo.component';
import { HomeComponent } from "./pages/home/home.component";
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { EventsModule } from "./pages/events/events.module";
import { AboutModule } from "./pages/about/about.module";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    NavBarComponent,
    AnnouncementsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,


    // Route Modules
    EventsModule,
    AboutModule,


    // Material Imports
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
