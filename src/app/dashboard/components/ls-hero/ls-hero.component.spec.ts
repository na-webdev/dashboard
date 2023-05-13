import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsHeroComponent } from './ls-hero.component';

describe('LsHeroComponent', () => {
  let component: LsHeroComponent;
  let fixture: ComponentFixture<LsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
