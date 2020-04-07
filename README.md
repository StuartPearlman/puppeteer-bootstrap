# puppeteer-bootstrap
Scaffolded project for painless QA automation.

Add your own Pages and specs, push to Bitbucket, PROFIT.

Failed tests generate screenshots in `/screenshots`.

## Tooling
*  [Node 10+](https://nodejs.org/en/) (developed on Node 12)
*  [Puppeteer](https://pptr.dev/)
*  [Mocha](https://mochajs.org/)
*  [Chai](https://www.chaijs.com/)

## Commands
`npm run test:dev`

Runs the tests against the DEV environment

`npm run test:staging`

Runs the tests against the STAGING environment

## Local Configuration
This project uses [dotenv-extended](https://github.com/keithmorris/node-dotenv-extended) to manage environment variables. The required values are described in the `.env.schema` file.
To run locally, add a `.env` file to the root of the project and add the necessary values. This file will intentionally NOT be tracked by Git.
