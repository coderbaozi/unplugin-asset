import fsp from "fs/promises";
import { rawRE } from "../regex";
import { removeRawQuery } from "../tools";
import { Options } from "../types";

export function createContext(options: Options = {}, root = process.cwd()){
  function filter(id: string) {
    // rspack's html-plugin will block
    return !id.includes('html')
  }
  
  async function load(id: string) {
    if(rawRE.test(id)) {
      const file = removeRawQuery(id);
      return {code: `export default ${JSON.stringify(await fsp.readFile(file, 'utf-8'))}`}
    }
  }

  return {
    root,
    filter,
    load
  }
}
