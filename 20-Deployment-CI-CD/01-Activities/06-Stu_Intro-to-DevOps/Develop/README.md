# Deployment Process Does Not Include Automated Testing

## Problem

The current deployment process does not include automated testing, which leads to code being pushed to production without verification. This lack of testing can result in bugs and errors being introduced to the live environment, negatively impacting the application's reliability and user experience.

* Focus on a specific problem.
Problem
The deployment process for our application currently lacks automated testing, allowing code to be pushed directly to production without proper verification. This gap means we cannot consistently catch potential issues—such as bugs, security vulnerabilities, and integration errors—prior to the code reaching live users.

As a result, new deployments can negatively impact the application’s stability and reliability. The lack of automated testing increases the risk of breaking core features, affecting the user experience and leading to downtime or emergency fixes. Moreover, manual testing alone is not only time-consuming but also prone to human error and limited in scope. With each deployment, our developm

  * Ask what the problem **is** and tell the story around that.
  Key Questions to Define the Problem
What specific issues have we faced due to the lack of automated testing?

Instances of bugs introduced in production, missed integration issues, or delays in identifying critical problems.
How frequently are bugs or regressions discovered in production?

Examining this can help quantify the problem’s impact.
What manual processes are in place, and why aren’t they sufficient?

Understanding limitations in current manual testing can clarify the necessity for automation.
What aspects of the application are most impacted by the lack of automated testing?

For example, functionality critical to user workflows, security-related issues, or performance degradation.
How does this problem impact our team’s productivity and user experience?

Consider how fixing issues post-release impacts development resources and whether users have voiced concerns.
The Story Behind the Problem
Imagine a scenario where a developer pushes code for a new feature late in the week. With no automated testing, we rely on a quick, manual review. The code appears sound, so it’s deployed to production. However, a critical bug surfaces that causes a key feature to fail for users. Because no automated tests were run, the issue is only discovered when users start reporting problems. This bug triggers an emergency rollback and additional development cycles to fix the issue—disrupting the team and eroding user trust.

The above scenario is not uncommon, and each occurrence contributes to a reactive cycle of patches and reduced confidence in the deployment process. By implementing automated testing, we can create a safety net that allows us to identify and resolve these issues before they impact users, leading to a more reliable, efficient, and resilient deployment pipeline.




## Current Process

* This section is **optional** but recommended.

* What is the current process?

  * What is working well? Why?

Code Reviews: Manual code reviews provide a helpful initial check on the logic and structure of code.
Basic Manual Testing: Helps catch some issues before deployment, though it’s inconsistent and highly variable.

  * What isn't working well? Why?
  * Inconsistent Coverage: Manual testing leaves gaps, especially under deadlines.    * Edge  cases or less obvious bugs are often missed.
*   Higher Deployment Risks: Without automated testing, production deployments involve a greater risk of introducing new bugs.
* Lack of Documentation: Tests are not systematically documented, and knowledge is spread across the team.

  * Do you know how things are done? Does your team or company?

* Be as thorough as you can, and list questions that come up during your research. Answer those questions.

questions Raised
1.How feasible is it to implement automated testing within the team’s workflow?
2.Can automated testing be achieved without disrupting the current process?
3.Which testing tools and frameworks are compatible with our existing stack?

* This section can help identify decisions made outside your control and scope—for example, organizational choices made by the company or team.

## Requirements

* This section is **optional**.

* List of requirements the solution has to meet. Requirements such as:

  * Business Requirements
    * What do we care about?
    * What don't we want?
    * Where should the focus be?
    * Ease of use
  * Company Guidelines
    * Price
    * Works with the existing stack
  * Etc.

* This section will help us quickly eliminate specific solutions before we dive too deep.


Business Requirements
Reliability and Quality Assurance

The solution must automatically validate code quality and functionality, catching potential issues before deployment.
It should identify any regression or breaking changes to prevent them from reaching production.
User Experience Protection

Automated tests should verify core functionalities that directly impact user workflows to avoid disruptions in user experience.
Ease of Use

The solution should be easy for developers to set up, use, and monitor, minimizing additional overhead in their workflows.
It should integrate seamlessly with our existing code review and deployment processes.
Scalability

As the application grows, the testing solution should be capable of scaling to handle a larger codebase and test suite without performance issues.
Focus Areas

Emphasis on end-to-end testing and unit testing to cover both critical functionality and isolated components.
Company Guidelines
Cost Efficiency

The solution should be cost-effective, preferably a free or open-source option, to align with budget constraints.
Compatibility with Current Tech Stack

The solution must work well with our existing technology stack, which includes:
Back-end: Express.js
Front-end: Vite
Database: MongoDB
Testing Framework: Cypress (for end-to-end testing)
Language: TypeScript
It should also be compatible with GitHub, as this is our current version control platform.
CI/CD Integration

The solution must integrate with our Continuous Integration/Continuous Deployment (CI/CD) pipeline, allowing tests to run automatically on code commits and pull requests.
It should ideally integrate with GitHub Actions for automated test execution and provide clear feedback directly in the pull request interface.
Exclusions
Overly Complex Tools
Solutions that require significant changes to our workflow or are difficult for developers to use will be excluded.
High Maintenance Solutions
Tools requiring extensive manual configuration or frequent updates should be avoided to minimize upkeep.
By establishing these requirements, we can ensure the solution is practical, efficient, and well-aligned with our existing tools and goals. This focus will help us narrow down options to find a tool that best suits our team’s needs without requiring extensive reconfiguration or creating a large financial burden.








## Solution

* This section is **required**.

* Don't settle on the first solution you find. Look at multiple options.

* Once you have weighed the options, give the suggested solution and its reasoning.

* Present the solution using an existing problem-solving strategy, such as the Three W's of Strategy.

* A solution doesn't have to be a specific technology. Often, the solution is a culture or mindset shift.



Recommended Solution: GitHub Actions
Rationale
GitHub Actions offers native integration within the team’s workflow and supports all core requirements:

Seamless compatibility with the existing GitHub-based development flow.
Allows automated testing with Cypress for end-to-end tests, Jest or Mocha for unit tests, and can work with MongoDB.
Free for public repositories and offers a generous free tier for private repositories.


Testing Strategy:

Unit Tests: Use Jest for unit tests, covering isolated functions and core logic.
Integration Tests: Validate MongoDB-related functionalities and API interactions.
End-to-End Tests: Use Cypress to simulate user workflows and validate that Vite and Express.js function together as expected.



---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
