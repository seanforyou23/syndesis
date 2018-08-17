// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after the first failure
  // bail: false,

  // Respect "browser" field in package.json when resolving modules
  // browser: false,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/var/folders/fr/rgtw8ypj18n1hj084j11kxhr0000gn/T/jest_dx",

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  // coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: null,

  // Force coverage collection from ignored files usin a array of glob patterns
  // forceCoverageMatch: [],

  // A set of global variables that need to be available in all test environments
  globals: {
    "ts-jest": {
      "tsConfigFile": "./tsconfig.json"
    }
  },

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    "node_modules",
    "<rootDir>/src"
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],

  // Automatically reset mock state between every test
  // resetMocks: false,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['./test.env.ts'],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/*.test.(ts|tsx|js)"
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern Jest uses to detect test files
  // testRegex: "",

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: "http://localhost",

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  timers: "fake",

  // A map from regular expressions to paths to transformers
  transform: {
    // "^.+\\.(ts|tsx)$": "ts-jest"
    "^.+\\.(ts|tsx)$": "<rootDir>/preprocessor.js"
  },

  // Indicates whether each individual test should be reported during the run
  // verbose: null,
};
