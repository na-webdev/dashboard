import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@dashboard/pages';
import { RightSidenavComponent } from '@dashboard/components';
import { NotFoundComponent } from '@dashboard/pages/not-found/not-found.component';
import { ProjectComponent } from '@dashboard/pages/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'project', component: ProjectComponent },
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
