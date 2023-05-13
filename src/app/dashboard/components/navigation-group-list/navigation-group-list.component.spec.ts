import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationGroupListComponent } from './navigation-group-list.component';

describe('NavigationGroupListComponent', () => {
  let component: NavigationGroupListComponent;
  let fixture: ComponentFixture<NavigationGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationGroupListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
