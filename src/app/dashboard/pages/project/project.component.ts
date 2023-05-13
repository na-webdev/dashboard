import { Component } from '@angular/core';
import { staticUiUserData } from '@dashboard/data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  userData = staticUiUserData;
}
