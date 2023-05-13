import { Component, Input } from '@angular/core';
import { UserDataI } from '@dashboard/interfaces/user-data.interface';

@Component({
  selector: 'app-ls-hero',
  templateUrl: './ls-hero.component.html',
  styleUrls: ['./ls-hero.component.scss'],
})
export class LsHeroComponent {
  @Input() userData: UserDataI;
}
