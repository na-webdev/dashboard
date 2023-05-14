import { Component } from '@angular/core';
import { NavigationGroupI, UserDataI } from '@dashboard/interfaces';
import { UiDataService } from '@dashboard/services/ui-data.service';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss'],
})
export class LeftSidenavComponent {
  userData: UserDataI;
  navigationGroups: NavigationGroupI[];

  constructor(private uiDataService: UiDataService) {
    this.userData = this.uiDataService.getUserData();
    this.navigationGroups = this.uiDataService.getLeftNavUrlGroups();
  }
}
