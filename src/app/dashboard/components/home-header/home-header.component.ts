import { Component, EventEmitter, Output } from '@angular/core';
import { UiDataService } from '@dashboard/services/ui-data.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {
  @Output() onToggleLeftSideNav = new EventEmitter();
  headerButtonIcons: string[];

  constructor(private uiDataService: UiDataService) {
    this.headerButtonIcons = this.uiDataService.getHeaderIcons();
  }
}
