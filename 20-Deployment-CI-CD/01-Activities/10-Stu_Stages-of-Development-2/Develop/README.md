# Coverage Reporting

## Packages

* Explain the added packages to the root `package.json`.

* Explain the updates to the npm scripts.

* Explain the contents of the `.nycrc` file.
nyc: A popular code coverage tool for JavaScript, which integrates well with testing frameworks to provide coverage metrics. It helps track which lines of code are executed during tests.

The .nycrc file is the configuration file for nyc, specifying coverage settings. Typical settings include:

"all": true — Enables tracking for all files, even those not directly tested.
"reporter": ["html", "text-summary"] — Specifies the output formats, e.g., HTML for detailed reports and text-summary for a quick console output.
"exclude": ["cypress", "tests"] — Excludes specific directories (like Cypress tests) from the coverage report.
"extension": [".js", ".ts", ".vue"] — Specifies which file types to include in coverage.
"check-coverage": true and "branches", "functions", etc. — Enforces minimum coverage thresholds, warning if coverage falls below them.


## Cypress

* Explain the updates to the `cypress.config.ts` file.

* Explain any additions to the `cypress/support` files.

## Vite

* Explain the updates in the `vite.config.ts` files.

## Coverage

* Run the new `test:coverage` script. Explain the generated folders and final response in the console.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
