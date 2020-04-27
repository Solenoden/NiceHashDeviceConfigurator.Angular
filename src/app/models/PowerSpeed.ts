import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('PowerSpeed')
export class PowerSpeed {

  @JsonProperty('hash_rates', [], true)
  public hashRates: [] = undefined;

  @JsonProperty('measured_type', String, true)
  public measuredType: string = undefined;

  @JsonProperty('saved_at', String, true)
  public savedAt: string = undefined;

}
