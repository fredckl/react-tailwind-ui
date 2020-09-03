import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import path from "path";
import pkg from "./package.json";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/reta-ui/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
      name: "Reta-ui",
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      exports: "named",
    },
  ],
  external: ["react", "react-dom", "ramda", "ramda-adjuct"],
  plugins: [
    terser(),
    // copy({
    //   targets: [
    //     {
    //       src: [
    //         'app/widgets/assets/svg',
    //       ],
    //       dest: 'dist/assets'
    //     },
    //     {
    //       src: [
    //         'app/widgets/assets/fonts'
    //       ],
    //       dest: 'dist'
    //     },
    //     {
    //       src: [
    //         'app/widgets/assets/less/vars.less',
    //         'app/widgets/assets/less/varicons.less',
    //         'app/widgets/assets/less/antd-custom.less',
    //       ],
    //       dest: 'dist/less'
    //     }
    //   ]
    // }),
    peerDepsExternal(),
    // postcss({
    //   plugins: [],
    //   minimize: false,
    //   extract: 'assets/style.css',
    //   use: [[
    //     'less',
    //     {
    //       modifyVars: {
    //         'hack': `true; @import "${path.join(__dirname, 'app', 'widgets', 'assets', 'less', 'antd-custom.less')}";`
    //       },
    //       javascriptEnabled: true
    //     }
    //   ]]
    // }),
    babel({
      runtimeHelpers: true,
      exclude: ["node_modules/**", "*.json"],
    }),
    resolve({
      browser: true,
    }),
    commonjs({
      include: "node_modules/**",
    }),
  ],
};
