import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCoordinadorComponent } from './dashboard-coordinador.component';

describe('DashboardCoordinadorComponent', () => {
  let component: DashboardCoordinadorComponent;
  let fixture: ComponentFixture<DashboardCoordinadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCoordinadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
