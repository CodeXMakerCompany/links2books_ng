import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAsistenteComponent } from './dashboard-asistente.component';

describe('DashboardAsistenteComponent', () => {
  let component: DashboardAsistenteComponent;
  let fixture: ComponentFixture<DashboardAsistenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAsistenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
