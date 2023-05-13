import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@dashboard/pages';
import { LsHeroComponent } from '@dashboard/components/ls-hero/ls-hero.component';
import { BadgeComponent } from '@shared/components';
import { RightSidenavComponent } from '@dashboard/components';
import { NotFoundComponent } from '@dashboard/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'main', component: RightSidenavComponent },
      { path: 'analytics', component: RightSidenavComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
