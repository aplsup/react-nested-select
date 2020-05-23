import rollup from "rollup";
import rollupCfg from "./rollup.config";

const watchConfig = {
    include: "src/**",
    exclude: "node_modules/**"
}

const config = Object.assign({}, rollupCfg, watchConfig);
const watcher = rollup.watch(config);

watcher.on("event", event => {
    // event.code can be one of:
    //   START        — the watcher is (re)starting
    //   BUNDLE_START — building an individual bundle
    //   BUNDLE_END   — finished building a bundle
    //   END          — finished building all bundles
    //   ERROR        — encountered an error while bundling
    //   FATAL        — encountered an unrecoverable error
    switch (event.code) {
        case "START": {
            console.log("Starting watch");
        }
    }
});

