import { Component } from '@angular/core';
import { staticUiNavigationGroups, staticUiUserData } from '@dashboard/data';
import { NavigationGroupI, UserDataI } from '@dashboard/interfaces';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss'],
})
export class LeftSidenavComponent {
  userData: UserDataI = staticUiUserData;
  navigationGroups: NavigationGroupI[] = staticUiNavigationGroups;
}
