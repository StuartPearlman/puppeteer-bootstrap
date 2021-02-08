/*
 These are your specs.
 This is where you should manipulate elements, describe behaviors, and set expectations.
 Wrapping your specs in a try/catch allows for screenshots while preserving error propagation.
 */

const { takeScreenshot, isVisibleBySelector, getAttrValue } = require('../helpers');
const { HomePage } = require('../Pages/Home');

describe('The Inspire11 homepage', () => {
    let homePage;

    before(async () => {
        // Init the Page and open it
        homePage = new HomePage();
        await homePage.open();
    });

    it('should display the company logo', async () => {
        try {
            expect(await isVisibleBySelector('[href="/"] > img')).to.be.true;
        } catch (error) {
            await takeScreenshot({ error, fileName: __filename });
        }
    });

    it('should allow leads to be submitted via web form', async () => {
        try {
            await homePage.fillOutForm();
            const messageTextArea = await homePage.getMessageTextArea();
            expect(await getAttrValue(messageTextArea, 'value')).to.equal('Thanks for using Puppeteer Bootstrap!');
        } catch (error) {
            await takeScreenshot({ error, fileName: __filename });
        }
    });
});
