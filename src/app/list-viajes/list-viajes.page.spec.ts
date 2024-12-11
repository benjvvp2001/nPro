import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListViajesPage } from './list-viajes.page';

describe('ListViajesPage', () => {
  let component: ListViajesPage;
  let fixture: ComponentFixture<ListViajesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
