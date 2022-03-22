import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpauditComponent } from './lpaudit.component';

describe('LpauditComponent', () => {
  let component: LpauditComponent;
  let fixture: ComponentFixture<LpauditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpauditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LpauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
