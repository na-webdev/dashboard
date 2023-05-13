import { Component } from '@angular/core';

@Component({
  selector: 'app-statistic-boards',
  templateUrl: './statistic-boards.component.html',
  styleUrls: ['./statistic-boards.component.scss'],
})
export class StatisticBoardsComponent {
  staticCards = [
    { number: 20, type: 'due tasks', completed: 13, title: 'summary' },
    { number: 20, type: 'tasks', completed: 9, title: 'overdue' },
    { number: 20, type: 'open', completed: 19, title: 'issues' },
    { number: 20, type: 'proposals', completed: 16, title: 'features' },
  ];

  staticCards2 = [
    { number: 214, type: 'new issues' },
    { number: 75, type: 'closed' },
    { number: 3, type: 'fixed' },
    { number: 4, type: "won't fix" },
    { number: 8, type: 'reopened' },
    { number: 6, type: 'needs triage' },
  ];
}
