import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuSettingsListSidebarComponent } from './gpu-settings-list-sidebar.component';

describe('GpuSettingsListSidebarComponent', () => {
  let component: GpuSettingsListSidebarComponent;
  let fixture: ComponentFixture<GpuSettingsListSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpuSettingsListSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuSettingsListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
