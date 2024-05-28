import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingSupportTicketsRoutingModule } from './setting-support-tickets-routing.module';
import { SettingSupportTicketsComponent } from './setting-support-tickets.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    SettingSupportTicketsComponent
  ],
  imports: [
    CommonModule,
    SettingSupportTicketsRoutingModule,
    FeatherIconModule
  ]
})
export class SettingSupportTicketsModule { }
