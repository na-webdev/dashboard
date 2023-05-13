import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() className = '';
  @Input() content = '';
  @Input() size: 'small' | 'medium' = 'small';
}
