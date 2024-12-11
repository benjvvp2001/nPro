import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroCarPage } from './registro-car.page';

describe('RegistroCarPage', () => {
  let component: RegistroCarPage;
  let fixture: ComponentFixture<RegistroCarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
