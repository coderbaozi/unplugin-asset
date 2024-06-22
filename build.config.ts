import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/rspack.ts'
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
