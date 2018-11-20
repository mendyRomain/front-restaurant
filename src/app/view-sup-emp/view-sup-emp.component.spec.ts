import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupEmpComponent } from './view-sup-emp.component';

describe('ViewSupEmpComponent', () => {
  let component: ViewSupEmpComponent;
  let fixture: ComponentFixture<ViewSupEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
