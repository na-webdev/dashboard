import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { BadgeComponent } from './components/badge/badge.component';
import { MatExpansionModule } from '@angular/material/expansion';

const materialComponentModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatBadgeModule,
  MatListModule,
  MatRippleModule,
  MatMenuModule,
  MatCardModule,
  MatExpansionModule,
];

const uiComponents = [BadgeComponent];

@NgModule({
  declarations: [...uiComponents],
  imports: [CommonModule, ...materialComponentModules],
  exports: [CommonModule, ...materialComponentModules, ...uiComponents],
})
export class SharedModule {}
