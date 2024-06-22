import { rawRE, trailingSeparatorRE } from "../regex";
export function removeRawQuery(id:string) {
  return id.replace(rawRE, '$1').replace(trailingSeparatorRE, '')
}
