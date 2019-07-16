const { takeScreenshot, isVisibleBySelector, getAttrValue } = require('../helpers');
const { HomePage } = require('../Pages/Home');

describe('The Inspire11 homepage', () => {
    let homePage;

    before(async () => {
        homePage = new HomePage();
        await homePage.open();
    });

    it('should display the company logo', async () => {
        try {
            expect(await isVisibleBySelector('[alt="Inspire11"]')).to.be.true;
        } catch (error) {
            await takeScreenshot({ error, fileName: __filename });
        }
    });

    it('should allow leads to be submitted via web form', async () => {
        try {
            await homePage.fillOutForm();
            const messageTextArea = await homePage.getMessageTextArea();
            expect(await getAttrValue(messageTextArea, 'value')).to.equal('Thanks for using Puppet Master!');
        } catch (error) {
            await takeScreenshot({ error, fileName: __filename });
        }
    });
});
