import {JsonObject, JsonProperty} from 'json2typescript';
import {PowerSettings} from './PowerSettings';

@JsonObject('AlgorithmSettings')
export class AlgorithmSettings {

  @JsonProperty('miner', String, true)
  public miner: string = undefined;

  @JsonProperty('algorithm_id', [Number], true)
  public algorithmId: number[] = undefined;

  @JsonProperty('enabled', Boolean, true)
  public enabled: boolean = undefined;

  @JsonProperty('power', [PowerSettings], true)
  public power: PowerSettings[] = undefined;

}
