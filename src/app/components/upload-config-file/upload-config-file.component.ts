import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {BaseComponent, MESSAGE_TYPE} from '../../base-component';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';
import {JsonConvert, ValueCheckingMode} from 'json2typescript';
import {Device} from '../../models/Device';

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
  ) {
    super(snackBar);
  }

  ngOnInit() {
  }

  uploadFile(event) {
    const file = event[0];

    const reader = new FileReader();
    reader.onload = () => {
      try {
        let jsonConvert = new JsonConvert();
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
        const device: Device = jsonConvert.deserializeObject(JSON.parse(reader.result as string), Device);

        this.storageService.setConfigFile(device);

        this.showMessage('Config file successfully uploaded');
        this.router.navigate(['main/configure-device']);
      } catch (error) {
        console.error(error);
        this.showMessage('Invalid config file. Please upload your device\'s device_settings.json file', MESSAGE_TYPE.ERROR);
      }
    };

    reader.readAsText(file);
  }
}
