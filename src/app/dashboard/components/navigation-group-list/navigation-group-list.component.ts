import { Component, Input } from '@angular/core';
import { NavigationGroupI } from '@dashboard/interfaces/navigation-group.interface';

@Component({
  selector: 'app-navigation-group-list',
  templateUrl: './navigation-group-list.component.html',
  styleUrls: ['./navigation-group-list.component.scss'],
})
export class NavigationGroupListComponent {
  @Input() group: NavigationGroupI;
}
