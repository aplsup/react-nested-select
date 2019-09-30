module.exports = {
    transform: {
        ".(ts|tsx)": require.resolve("ts-jest/dist"),
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    testMatch: ["<rootDir>/test/*.(spec|test).{ts,tsx}"],
    testURL: "http://localhost",
    rootDir: "./"
};
