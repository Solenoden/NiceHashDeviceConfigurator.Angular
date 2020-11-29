import {Any, JsonObject, JsonProperty} from 'json2typescript';
import {Algorithm} from './Algorithm';

@JsonObject('GPU')
export class GPU {
  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('device_id', String, true)
  public device_id: string = undefined;

  @JsonProperty('enabled', Boolean, true)
  public enabled: boolean = undefined;

  @JsonProperty('active', Boolean, true)
  public active: boolean = undefined;

  @JsonProperty('selected_power_mode', String, true)
  public selected_power_mode: string = undefined;

  @JsonProperty('algorithms', [Any], true)
  public algorithms: Algorithm[] = undefined;
}
