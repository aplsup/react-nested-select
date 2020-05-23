import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    external: ["react"],
    output: [
        {
            dir: "dist",
            format: "cjs",
        },
        {
            dir: "dist",
            format: "es",
        }
    ],
    plugins: [
        typescript({
            target: "es2019"
        })
    ],
};
