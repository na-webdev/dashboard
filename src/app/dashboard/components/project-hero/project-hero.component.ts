import { Component, Input } from '@angular/core';
import { UserDataI } from '@dashboard/interfaces';

@Component({
  selector: 'app-project-hero',
  templateUrl: './project-hero.component.html',
  styleUrls: ['./project-hero.component.scss'],
})
export class ProjectHeroComponent {
  @Input() userData: UserDataI;
}
