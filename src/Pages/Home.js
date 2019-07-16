const { getEnv, clearInputAndEnterValue } = require('../helpers');

const env = getEnv();

class HomePage {
    async open() {
        return page.goto(env.baseUrl, {
            waitUntil: 'networkidle0',
        });
    }

    async getMessageTextArea() {
        return page.$('[name="Message"]');
    }

    async fillOutForm() {
        await clearInputAndEnterValue('[name="Name"]', 'Mr. Lead');
        await clearInputAndEnterValue('[name="Email"]', 'lead@inspire11.com');
        await clearInputAndEnterValue('[name="Phone No."]', '800-588-2300');
        await clearInputAndEnterValue('[name="Subject"]', 'Ready to sign');
        await clearInputAndEnterValue('[name="Message"]', 'Thanks for using Puppet Master!');

        // Don't actually submit it, of course
        await page.waitFor(3000);
    }
}

module.exports = {
    HomePage,
};
