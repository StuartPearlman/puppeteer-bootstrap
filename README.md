# puppeteer-bootstrap

![Inspire11 OSS](https://img.shields.io/badge/Inspire11-OSS-orange?style=for-the-badge&labelColor=ff6b00&color=0055b8)

![Build status](https://img.shields.io/bitbucket/pipelines/inspire11/puppeteer-bootstrap?logo=bitbucket&style=flat-square)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@inspire11/puppeteer-bootstrap?style=flat-square)

![License](https://img.shields.io/npm/l/@inspire11/puppeteer-bootstrap?style=flat-square)
![Node version](https://img.shields.io/node/v/@inspire11/puppeteer-bootstrap?style=flat-square)

![Puppeteer](https://img.shields.io/npm/dependency-version/@inspire11/puppeteer-bootstrap/puppeteer?style=flat-square)
![Mocha](https://img.shields.io/npm/dependency-version/@inspire11/puppeteer-bootstrap/mocha?style=flat-square)
![Chai](https://img.shields.io/npm/dependency-version/@inspire11/puppeteer-bootstrap/chai?style=flat-square)

Scaffolded project for painless QA automation.

Add your own Pages and specs, push to Bitbucket, PROFIT.

Failed tests generate screenshots in `/screenshots`.

## Tooling
*  [Node 15+](https://nodejs.org/en/) (developed on Node 15.8.0)
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
