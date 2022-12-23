import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeobleComponent } from './peoble.component';

describe('PeobleComponent', () => {
  let component: PeobleComponent;
  let fixture: ComponentFixture<PeobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeobleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
