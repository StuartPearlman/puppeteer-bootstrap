const { takeScreenshot, getAttrValue, getTabByUrl } = require('../helpers');
const { AboutPage } = require('../Pages/About');

describe('The Inspire11 "About" page', () => {
    let aboutPage;

    before(async () => {
        aboutPage = new AboutPage();
        await aboutPage.open();
    });

    it('should open links to our community partners in new tabs', async () => {
        try {
            const link = await aboutPage.getCommunityPartnerLink();
            await link.click();
            const href = await getAttrValue(link, 'href');
            const communityPartnerTab = await getTabByUrl(href);

            expect(communityPartnerTab).to.exist;

            await communityPartnerTab.close();
        } catch (error) {
            await takeScreenshot({ error, fileName: __filename });
        }
    });
});
