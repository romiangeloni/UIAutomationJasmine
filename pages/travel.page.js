const page = require('./page');

const travelPage = Object.create(page, {
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        // page.open.call(this, '/iframe.html?angularparams=/TRAVEL/B2C/ES/es_ES/step-1');
        page.open.call(this, '/#/TRAVEL/B2C/ES/es_ES/version_A_default/step-1');
    } },
});

module.exports = travelPage;
