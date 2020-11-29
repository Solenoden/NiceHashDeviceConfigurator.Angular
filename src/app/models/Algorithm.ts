import {Any, JsonObject, JsonProperty} from 'json2typescript';
import {PowerMode} from './PowerMode';

@JsonObject('Algorithm')
export class Algorithm {
  @JsonProperty('miner', String, true)
  public miner: string = undefined;

  @JsonProperty('algorithm_id', [Number], true)
  public algorithm_id: number[] = undefined;

  @JsonProperty('enabled', Boolean, true)
  public enabled: boolean = undefined;

  @JsonProperty('power', [Any], true)
  public power: PowerMode[] = undefined;
}
