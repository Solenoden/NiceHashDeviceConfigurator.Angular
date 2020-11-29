import {Any, JsonObject, JsonProperty} from 'json2typescript';
import {PowerSpeed} from './PowerSpeed';

@JsonObject('PowerMode')
export class PowerMode {
  @JsonProperty('mode', String, true)
  public mode: string = undefined;

  @JsonProperty('speed', PowerSpeed, true)
  public speed: PowerSpeed = undefined;

  @JsonProperty('power_use', Number, true)
  public power_use: number = undefined;

  @JsonProperty('extra_parameters', [String], true)
  public extra_parameters: string[] = undefined;

  @JsonProperty('tdp', String, true)
  public tdp: string = undefined;

  @JsonProperty('core_clocks', Number, true)
  public core_clocks: number = undefined;

  @JsonProperty('memory_clocks', Number, true)
  public memory_clocks: number = undefined;
}
