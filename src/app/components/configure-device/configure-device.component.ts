import {Component, Input, OnInit} from '@angular/core';
import {DeviceSettings} from '../../models/DeviceSettings';
import {StorageService} from '../../services/storage.service';
import {JsonConvert, ValueCheckingMode} from 'json2typescript';

@Component({
  selector: 'app-configure-device',
  templateUrl: './configure-device.component.html',
  styleUrls: ['./configure-device.component.scss']
})
export class ConfigureDeviceComponent implements OnInit {
  deviceSettings: DeviceSettings;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.getConfigFile();
  }

  getConfigFile() {
    let jsonConvert = new JsonConvert();
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

    const configFileData = this.storageService.getConfigFile();
    this.deviceSettings = jsonConvert.deserializeObject(configFileData, DeviceSettings);
  }

}
