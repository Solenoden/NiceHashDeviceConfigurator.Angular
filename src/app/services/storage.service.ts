import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private ITEM_CONFIG_FILE = 'configFile';

  setConfigFile(configFile: any) {
    sessionStorage.setItem(this.ITEM_CONFIG_FILE, JSON.stringify(configFile));
  }

  getConfigFile() {
    return JSON.parse(sessionStorage.getItem(this.ITEM_CONFIG_FILE));
  }
}
