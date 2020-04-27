import {JsonObject, JsonProperty} from 'json2typescript';
import {POWER_MODE} from '../enums/PowerMode';
import {PowerSpeed} from './PowerSpeed';

@JsonObject('PowerSettings')
export class PowerSettings {

  @JsonProperty('mode', POWER_MODE, true)
  public mode: POWER_MODE = undefined;

  @JsonProperty('speed', PowerSpeed, true)
  public powerSpeed: PowerSpeed = undefined;

  @JsonProperty('power_use', Number, true)
  public powerUse: boolean = undefined;

  @JsonProperty('extra_parameters', [String], true)
  public extraParameters: string[] = undefined;

  @JsonProperty('tdp', String, true)
  public tdp: string = undefined;

  @JsonProperty('core_clocks', String, true)
  public coreClocks: string = undefined;

  @JsonProperty('memory_clocks', String, true)
  public memoryClocks: string = undefined;

}
