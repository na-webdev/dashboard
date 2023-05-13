import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent {
  @Input() title: string;
  @Input() statData: string | number;
  @Input() statType: string;
  @Input() footerContent: string;
  @Input() cardClass = '';
  @Input() mainTextClass = '';
  @Input() subTextClass = '';

  @Output() onMoreVertClick = new EventEmitter<string>();
}
