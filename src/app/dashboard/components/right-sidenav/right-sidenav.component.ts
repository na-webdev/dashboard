import { Component } from '@angular/core';
import { userList } from '@dashboard/data';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.scss'],
})
export class RightSidenavComponent {
  users = userList;
}
