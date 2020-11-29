import {JsonObject, JsonProperty} from 'json2typescript';
import {GPU} from './GPU';

@JsonObject('Device')
export class Device {
  @JsonProperty('detected_devices', [GPU], true)
  public detected_devices: GPU[] = undefined;
}
