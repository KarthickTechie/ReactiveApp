import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvdetailComponent } from './invdetail.component';

describe('InvdetailComponent', () => {
  let component: InvdetailComponent;
  let fixture: ComponentFixture<InvdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
