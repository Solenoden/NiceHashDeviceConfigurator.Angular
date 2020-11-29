import {Any, JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('PowerSpeed')
export class PowerSpeed {
  @JsonProperty('hash_rates', [Number], true)
  public hash_rates: number[] = undefined;

  @JsonProperty('measured_type', String, true)
  public measured_type: string = undefined;

  @JsonProperty('saved_at', String, true)
  public saved_at: string = undefined;
}
