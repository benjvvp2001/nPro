import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormConductorPage } from './form-conductor.page';

describe('FormConductorPage', () => {
  let component: FormConductorPage;
  let fixture: ComponentFixture<FormConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
