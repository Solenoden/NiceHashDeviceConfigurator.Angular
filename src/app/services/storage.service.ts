import {Injectable} from '@angular/core';
import {Device} from '../models/Device';
import {JsonConvert, ValueCheckingMode} from 'json2typescript';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private ITEM_CONFIG_FILE = 'configFile';

  setConfigFile(configFile: Device): void {
    sessionStorage.setItem(this.ITEM_CONFIG_FILE, JSON.stringify(configFile));
  }

  getConfigFile(): Device {
    let jsonConvert = new JsonConvert();
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

    return jsonConvert.deserializeObject(JSON.parse(sessionStorage.getItem(this.ITEM_CONFIG_FILE)), Device);
  }
}
