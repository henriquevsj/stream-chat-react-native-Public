module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testResultsProcessor": "jest-sonar-reporter",
    "collectCoverage": true,
    "collectCoverageFrom": [
        "**/*.{ts,js}",
        "!**/node_modules/**"
    ],
    "coverageDirectory": "dist",
    "coverageReporters": ["lcov"]
};
