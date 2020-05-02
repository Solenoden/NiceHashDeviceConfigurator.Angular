import {JsonObject, JsonProperty} from 'json2typescript';
import {PowerSpeed} from './PowerSpeed';

@JsonObject('PowerMode')
export class PowerMode {

  @JsonProperty('mode', String, true)
  public mode: string = undefined;

  @JsonProperty('speed', PowerSpeed, true)
  public powerSpeed: PowerSpeed = undefined;

  @JsonProperty('power_use', Number, true)
  public powerUse: number = undefined;

  @JsonProperty('extra_parameters', [String], true)
  public extraParameters: string[] = undefined;

  @JsonProperty('tdp', String, true)
  public tdp: string = undefined;

  @JsonProperty('core_clocks', String, true)
  public coreClocks: string = undefined;

  @JsonProperty('memory_clocks', String, true)
  public memoryClocks: string = undefined;

}
