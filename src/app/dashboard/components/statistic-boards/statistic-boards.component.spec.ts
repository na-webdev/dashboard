import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticBoardsComponent } from './statistic-boards.component';

describe('StatisticBoardsComponent', () => {
  let component: StatisticBoardsComponent;
  let fixture: ComponentFixture<StatisticBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticBoardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
