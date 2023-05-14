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
import { HomeHeaderComponent } from './components/home-header/home-header.component';

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
    HomeHeaderComponent,
  ],
  imports: [DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
