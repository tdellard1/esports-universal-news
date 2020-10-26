import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamersComponent } from './streamers.component';
import { StreamersRoutingModule } from "./streamers-routing.module";



@NgModule({
  declarations: [StreamersComponent],
  imports: [
    CommonModule,
    StreamersRoutingModule
  ]
})
export class StreamersModule { }
