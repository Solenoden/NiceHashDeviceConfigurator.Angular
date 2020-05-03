import {Any, JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('PowerSpeed')
export class PowerSpeed {

  @JsonProperty('hash_rates', [Any], true)
  public hashRates: Any[] = undefined;

  @JsonProperty('measured_type', String, true)
  public measuredType: string = undefined;

  @JsonProperty('saved_at', String, true)
  public savedAt: string = undefined;

}
