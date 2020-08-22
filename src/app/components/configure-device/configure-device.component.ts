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
    const algorithmId = this.selectedGPU.algorithms[index].algorithmId[0];
    const algorithmName = this.selectedGPU.algorithms[index].miner;
    const isEnabled = !this.selectedGPU.algorithms[index].enabled;

    for (let gpu of this.device.gpu) {
      for (let algorithm of gpu.algorithms) {
        if (algorithm.algorithmId[0] === algorithmId && algorithm.miner === algorithmName) {
          algorithm.enabled = isEnabled;
        }
      }
    }
  }

  formToConfigFile() {
    let configFile = {
      detected_devices: []
    };

    for (let gpu of this.device.gpu) {
      let configFileGpu = {
        name: gpu.name,
        device_id: gpu.deviceId,
        enabled: gpu.enabled,
        active: gpu.active,
        selected_power_mode: gpu.selectedPowerMode,
        algorithms: []
      };

      let algorithms = [];
      for (let currentAlgorithm of gpu.algorithms) {
        let algorithm = {
          miner: currentAlgorithm.miner,
          algorithm_id: currentAlgorithm.algorithmId,
          enabled: currentAlgorithm.enabled,
          power: []
        };

        let powerModes = [];
        for (let currentPowerMode of currentAlgorithm.powerModes) {
          let powerMode = {
            mode: currentPowerMode.mode,
            speed: {},
            power_use: currentPowerMode.powerUse,
            extra_parameters: currentPowerMode.extraParameters,
            tdp: currentPowerMode.tdp,
            core_clocks: currentPowerMode.coreClocks,
            memory_clocks: currentPowerMode.memoryClocks,
          };

          powerMode.speed = {
            hash_rates: currentPowerMode.powerSpeed.hashRates,
            measured_type: currentPowerMode.powerSpeed.measuredType,
            saved_at: currentPowerMode.powerSpeed.savedAt
          };

          powerModes.push(powerMode);
        }

        algorithm.power.push(...powerModes);

        algorithms.push(algorithm);
      }

      configFileGpu.algorithms = algorithms;

      configFile.detected_devices.push(configFileGpu);
    }

    return configFile;
  }

  downloadConfigFile() {
    let configFile = this.formToConfigFile();

    this.dynamicDownloadJson(JSON.stringify(configFile));
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
