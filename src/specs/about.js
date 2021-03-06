/*
 These are your specs.
 This is where you should manipulate elements, describe behaviors, and set expectations.
 Wrapping your specs in a try/catch allows for screenshots while preserving error propagation.
 */

const { takeScreenshot, getAttrValue, getTabByUrl } = require('../helpers');
const { AboutPage } = require('../Pages/About');

describe('The Inspire11 "About" page', () => {
    let aboutPage;

    before(async () => {
        // Init the Page and open it
        aboutPage = new AboutPage();
        await aboutPage.open();
    });

    it('should open the link to our job board in a new tab', async () => {
        try {
            const link = await aboutPage.getCareersButtonLink();
            await link.click();
            const href = await getAttrValue(link, 'href');
            const greenhouseTab = await getTabByUrl(href);

            expect(greenhouseTab).to.exist;

            await greenhouseTab.close();
        } catch (error) {
            await takeScreenshot({ error, fileName: __filename });
        }
    });
});
