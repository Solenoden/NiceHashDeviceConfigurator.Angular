import {JsonObject, JsonProperty} from 'json2typescript';
import {GpuSettings} from './GpuSettings';

@JsonObject("DeviceSettings")
export class DeviceSettings {

  @JsonProperty('detected_devices', [Object], true)
  public gpuSettings: GpuSettings[] = undefined;

}
