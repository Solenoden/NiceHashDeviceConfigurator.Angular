import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {BaseComponent, MESSAGE_TYPE} from '../../base-component';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload-config-file',
  templateUrl: './upload-config-file.component.html',
  styleUrls: ['./upload-config-file.component.scss']
})
export class UploadConfigFileComponent extends BaseComponent implements OnInit {

  constructor(
    protected snackBar: MatSnackBar,
    private storageService: StorageService,
    private router: Router
  ) { super(snackBar) }

  ngOnInit() {
  }

  uploadFile(event) {
    const file = event[0];

    if (this.validateConfigFile(file)) {
      const reader = new FileReader();

     reader.onload = () => {
       this.storageService.setConfigFile(reader.result);

       this.showMessage('Config file successfully uploaded');

       this.router.navigate(['main/configure-device']);
     };

     reader.readAsText(file);
    } else {
      this.showMessage("Invalid config file. Please upload your device's device_settings.json file", MESSAGE_TYPE.ERROR);
    }
  }

  validateConfigFile(file: any) {
    return true;
  }

}
