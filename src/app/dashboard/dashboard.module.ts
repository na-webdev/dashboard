import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {
  HomeComponent,
  NotFoundComponent,
  ProjectComponent,
} from '@dashboard/pages';
import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';
import {
  LeftSidenavComponent,
  LsHeroComponent,
  NavigationGroupListComponent,
  ProjectHeroComponent,
  RightSidenavComponent,
  StatisticBoardsComponent,
} from '@dashboard/components';

@NgModule({
  declarations: [
    HomeComponent,
    LeftSidenavComponent,
    RightSidenavComponent,
    LsHeroComponent,
    NavigationGroupListComponent,
    NotFoundComponent,
    ProjectComponent,
    StatisticBoardsComponent,
    ProjectHeroComponent,
  ],
  imports: [DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
