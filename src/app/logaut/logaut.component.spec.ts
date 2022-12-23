import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogautComponent } from './logaut.component';

describe('LogautComponent', () => {
  let component: LogautComponent;
  let fixture: ComponentFixture<LogautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogautComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
