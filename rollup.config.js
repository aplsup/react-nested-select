/* eslint-disable @typescript-eslint/camelcase */

import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import filesize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.tsx",
    external: ["react"],
    output: [
        {
            file: pkg.main,
            format: "cjs",
        },
        {
            file: pkg.module,
            format: "es",
        }
    ],
    plugins: [
        terser({
            sourcemap: true,
            output: { comments: false },
            compress: {
                keep_infinity: true,
                pure_getters: true,
                passes: 10,
            },
            ecma: 5,
            toplevel: true,
            warnings: true,
        }),
        typescript({
            typescript: require("typescript"),
            tsconfigDefaults: {
                compilerOptions: {
                    sourceMap: true,
                    declaration: true,
                    jsx: "react",
                },
            },
            tsconfigOverride: {
                compilerOptions: {
                    target: "esnext",
                },
            },
        }),
        filesize(),
    ]
};
