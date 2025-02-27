import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["js", "ts"],
    rootDir: ".",
    testMatch: ["**/test/**/*.test.(ts|js)"],
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
};

export default config; 