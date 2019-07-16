const { getEnv } = require('../helpers');

const env = getEnv();

class AboutPage {
    async open() {
        return page.goto(`${env.baseUrl}/about`, {
            waitUntil: 'networkidle0',
        });
    }

    async getCommunityPartnerLink() {
        return page.$('[href="https://www.chicagoyouthcenters.org"]');
    }
}

module.exports = {
    AboutPage,
};
