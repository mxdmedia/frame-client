import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiServerAddressComponent } from './api-server-address.component';

describe('ApiServerAddressComponent', () => {
  let component: ApiServerAddressComponent;
  let fixture: ComponentFixture<ApiServerAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiServerAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiServerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
