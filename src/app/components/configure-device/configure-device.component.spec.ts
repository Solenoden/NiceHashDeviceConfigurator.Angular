import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureDeviceComponent } from './configure-device.component';

describe('ConfigureDeviceComponent', () => {
  let component: ConfigureDeviceComponent;
  let fixture: ComponentFixture<ConfigureDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
