import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {
  @Input() title: string;
  @Input() statData: string | number;
  @Input() statType: 'due tasks' | 'tasks' | 'open' | 'proposals' | string;
  @Input() footerContent: string;
  @Input() cardClass = '';
  @Input() mainTextClass = '';
  @Input() subTextClass = '';

  @Output() onMoreVertClick = new EventEmitter<string>();

  ngOnInit() {
    let textColorClass = '';
    switch (this.statType) {
      case 'tasks':
        textColorClass = 'text-red-500';
        break;
      case 'open':
        textColorClass = 'text-orange-500';
        break;
      case 'due tasks':
        textColorClass = 'text-blue-500';
        break;
      case 'proposals':
        textColorClass = 'text-green-500';
        break;
    }
    this.mainTextClass += ' ' + textColorClass;
  }
}
