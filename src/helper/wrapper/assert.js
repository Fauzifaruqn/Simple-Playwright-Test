const { expect } = require("@playwright/test");

class Assert {
     async assertTitle(title) {
        await expect(global.page).toHaveTitle(title);
    }

     async assertTitleContains(title) {
        const pageTitle = await global.page.title();
        expect(pageTitle).toContain(title);
    }

    async assertURL(url) {

        const currentURL = await global.page.url();

        const currentPath = new URL(currentURL).pathname;
        // await expect(global.page).toHaveURL(url);
        expect(currentPath).toBe(url);
    }

     async assertURLContains( title) {
        const pageURL = global.page.url();
        expect(pageURL).toContain(title);
    }
}

module.exports = {Assert};
