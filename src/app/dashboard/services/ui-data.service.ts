import { Injectable } from '@angular/core';
import {
  headerButtonIcons,
  staticUiNavigationGroups,
  staticUiUserData,
} from '@dashboard/data';

@Injectable({
  providedIn: 'root',
})
export class UiDataService {
  constructor() {}

  getUserData() {
    return staticUiUserData;
  }

  getLeftNavUrlGroups() {
    return staticUiNavigationGroups;
  }

  getHeaderIcons() {
    return headerButtonIcons;
  }
}
