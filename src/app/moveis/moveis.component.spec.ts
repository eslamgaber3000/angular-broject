import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveisComponent } from './moveis.component';

describe('MoveisComponent', () => {
  let component: MoveisComponent;
  let fixture: ComponentFixture<MoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
