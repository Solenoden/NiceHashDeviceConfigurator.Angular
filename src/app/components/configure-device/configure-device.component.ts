import {Component, OnInit} from '@angular/core';
import {Device} from '../../models/Device';
import {StorageService} from '../../services/storage.service';
import {GPU} from '../../models/GPU';
import {getAlgorithmName} from '../../logic/algorithmLogic';

@Component({
  selector: 'app-configure-device',
  templateUrl: './configure-device.component.html',
  styleUrls: ['./configure-device.component.scss']
})
export class ConfigureDeviceComponent implements OnInit {
  getAlgorithmName = getAlgorithmName;

  device: Device;
  selectedGPU: GPU;
  shouldPerformForAllGpus: boolean = true;
  coreClocksInputValue: number;
  memoryClocksInputValue: number;

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
    this.coreClocksInputValue = (this.selectedGPU.algorithms[0].power[0].core_clocks) ? this.selectedGPU.algorithms[0].power[0].core_clocks : 100;
    this.memoryClocksInputValue = (this.selectedGPU.algorithms[0].power[0].memory_clocks) ? this.selectedGPU.algorithms[0].power[0].memory_clocks : 100;
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

  changeCoreClocks(value: string) {
    const coreClocks = Number(value);

    if (this.shouldPerformForAllGpus) {
      this.device.detected_devices.forEach(gpu => {
        gpu.algorithms.forEach(algorithm => {
          algorithm.power.forEach(power => power.core_clocks = coreClocks);
        });
      });
    } else {
      this.selectedGPU.algorithms.forEach(algorithm => {
        algorithm.power.forEach(power => power.core_clocks = coreClocks);
      });
    }
  }

  changeMemoryClocks(value: string) {
    const memoryClocks = Number(value);

    if (this.shouldPerformForAllGpus) {
      this.device.detected_devices.forEach(gpu => {
        gpu.algorithms.forEach(algorithm => {
          algorithm.power.forEach(power => power.memory_clocks = memoryClocks);
        });
      });
    } else {
      this.selectedGPU.algorithms.forEach(algorithm => {
        algorithm.power.forEach(power => power.memory_clocks = memoryClocks);
      });
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

  dynamicDownloadByHtmlTag(arg: {
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
