import {JsonObject, JsonProperty} from 'json2typescript';
import {Algorithm} from './Algorithm';

@JsonObject('GPU')
export class GPU {

  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('device_id', String, true)
  public deviceId: string = undefined;

  @JsonProperty('enabled', Boolean, true)
  public enabled: boolean = undefined;

  @JsonProperty('active', Boolean, true)
  public active: boolean = undefined;

  @JsonProperty('selected_power_mode', String, true)
  public selectedPowerMode: string = undefined;

  @JsonProperty('algorithms', [Algorithm], true)
  public algorithms: Algorithm[] = undefined;

}
