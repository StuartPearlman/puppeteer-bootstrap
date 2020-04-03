const { getEnv } = require('../helpers');

const env = getEnv();

class AboutPage {
    async open() {
        return page.goto(`${env.baseUrl}/about`, {
            waitUntil: 'networkidle0',
        });
    }

    async getCareersButtonLink() {
        // Not ideal to insert waits, but href appears to be dynamically populated
        await page.waitFor(2000);
        return page.$('div > [href="https://boards.greenhouse.io/inspire11?gh_src=34d62c8c2"]');
    }
}

module.exports = {
    AboutPage,
};
