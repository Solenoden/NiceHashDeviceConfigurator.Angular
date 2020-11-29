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
  shouldPerformForAllGpus: boolean = true;

  private element = {
    dynamicDownload: null as HTMLElement
  };

  constructor(
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
    this.getConfigFile();
  }

  getConfigFile() {
    this.device = this.storageService.getConfigFile();

    this.selectGPU(0);
  }

  selectGPU(index) {
    this.selectedGPU = this.device.detected_devices[index];
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
    if (this.shouldPerformForAllGpus) {
      const algorithmId = this.selectedGPU.algorithms[index].algorithm_id[0];
      const algorithmName = this.selectedGPU.algorithms[index].miner;
      const isEnabled = !this.selectedGPU.algorithms[index].enabled;

      for (let gpu of this.device.detected_devices) {
        for (let algorithm of gpu.algorithms) {
          if (algorithm.algorithm_id[0] === algorithmId && algorithm.miner === algorithmName) {
            algorithm.enabled = isEnabled;
          }
        }
      }
    } else {
      this.selectedGPU.algorithms[index].enabled = !this.selectedGPU.algorithms[index].enabled;
    }
  }

  downloadConfigFile() {
    this.dynamicDownloadJson(JSON.stringify(this.device));
  }

  dynamicDownloadJson(data) {
    this.dynamicDownloadByHtmlTag({
      fileName: 'device_settings.json',
      text: JSON.stringify(data)
    });
  }

  private dynamicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.element.dynamicDownload) {
      this.element.dynamicDownload = document.createElement('a');
    }
    const element = this.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(JSON.parse(arg.text))}`);
    element.setAttribute('download', arg.fileName);

    let event = new MouseEvent('click');
    element.dispatchEvent(event);
  }

}
