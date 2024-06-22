import { createUnplugin } from "unplugin";
import { createContext } from "./ctx";

export default createUnplugin(options => {
  const ctx = createContext()
  return {
    name: 'unplugin-asset',
    enforce:'pre',
    loadInclude(id) {
      return ctx.filter(id)
    },
    async load(id) {
      return await ctx.load(id)
    },
  }
})
