import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProjectsComponent } from './submit-projects.component';

describe('SubmitProjectsComponent', () => {
  let component: SubmitProjectsComponent;
  let fixture: ComponentFixture<SubmitProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
