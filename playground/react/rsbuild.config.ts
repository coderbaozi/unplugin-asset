import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import AssetPlugin from "../../src/rspack";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [AssetPlugin({})],
    },
  },
});
