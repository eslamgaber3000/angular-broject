import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveiDetailsComponent } from './movei-details.component';

describe('MoveiDetailsComponent', () => {
  let component: MoveiDetailsComponent;
  let fixture: ComponentFixture<MoveiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveiDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
