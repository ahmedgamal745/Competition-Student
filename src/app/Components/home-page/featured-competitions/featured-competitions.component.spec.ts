import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCompetitionsComponent } from './featured-competitions.component';

describe('FeaturedCompetitionsComponent', () => {
  let component: FeaturedCompetitionsComponent;
  let fixture: ComponentFixture<FeaturedCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCompetitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
