import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditgridComponent } from './auditgrid.component';

describe('AuditgridComponent', () => {
  let component: AuditgridComponent;
  let fixture: ComponentFixture<AuditgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
