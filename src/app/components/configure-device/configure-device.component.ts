import {Component, OnInit} from '@angular/core';
import {Device} from '../../models/Device';
import {StorageService} from '../../services/storage.service';
import {JsonConvert, ValueCheckingMode} from 'json2typescript';
import {GPU} from '../../models/Gpu';

@Component({
  selector: 'app-configure-device',
  templateUrl: './configure-device.component.html',
  styleUrls: ['./configure-device.component.scss']
})
export class ConfigureDeviceComponent implements OnInit {
  device: Device;

  selectedGPU: GPU;

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
    this.device = jsonConvert.deserializeObject(configFileData, Device);

    this.selectGPU(0);
  }

  selectGPU(index) {
    this.selectedGPU = this.device.gpu[index];
  }

  getAlgorithmClasses(index) {
    let styleClasses = 'algorithm';

    if (this.selectedGPU.algorithms[index].enabled) {
      styleClasses = styleClasses + ' algorithm-enabled';
    } else {
      styleClasses = styleClasses + ' algorithm-disabled';
    }

    return styleClasses;
  }

  toggleAlgorithmEnabled(index) {
    this.selectedGPU.algorithms[index].enabled = !this.selectedGPU.algorithms[index].enabled;
  }

}
