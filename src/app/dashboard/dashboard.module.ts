import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@dashboard/pages';
import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';
import { LeftSidenavComponent } from '@dashboard/components';
import { RightSidenavComponent } from './components/right-sidenav/right-sidenav.component';
import { LsHeroComponent } from './components/ls-hero/ls-hero.component';
import { NavigationGroupListComponent } from './components/navigation-group-list/navigation-group-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectComponent } from './pages/project/project.component';

@NgModule({
  declarations: [
    HomeComponent,
    LeftSidenavComponent,
    RightSidenavComponent,
    LsHeroComponent,
    NavigationGroupListComponent,
    NotFoundComponent,
    ProjectComponent,
  ],
  imports: [DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
