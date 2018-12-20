function Page () {
}

// Page.prototype.open = function (path, host = 'https://b2c-es.uat.booking.allianz-assistance.com') {
Page.prototype.open = function (path, host = 'https://b2c-es.uat.booking.allianz-assistance.com/') {
    browser.url(`${host}${path}`);
}

Page.prototype.waitForPage = function (reload = false) {
    if (reload) {
        browser.reload();
    }
    this.open();

    browser.waitUntil(() => {
        console.log(browser.element('#submit'));
        return browser.element('#submit').type !== 'NoSuchElement';
    }, 15000, 'App was not loaded');
}

module.exports = new Page()



