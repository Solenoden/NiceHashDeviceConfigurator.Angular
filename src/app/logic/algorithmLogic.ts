import {ALGORITHM} from '../enums/Algorithm';

export function getAlgorithmName(algorithmId: number): string {
  for (let algorithmName of Object.keys(ALGORITHM)) {
    let value = ALGORITHM[algorithmName]

    if (value === algorithmId) {
      return algorithmName;
    }
  }

  return algorithmId.toString();
}
