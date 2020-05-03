import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadConfigFileComponent } from './upload-config-file.component';

describe('UploadConfigFileComponent', () => {
  let component: UploadConfigFileComponent;
  let fixture: ComponentFixture<UploadConfigFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadConfigFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadConfigFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
