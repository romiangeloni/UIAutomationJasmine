const travelPage = require('../../pages/travel.page');
const assert = require('assert');

const ELEMENTS = {
    menu: '.menu.ng-binding',
    typeOfCover: '[data-id="typeOfCover"]',
    travelCategory: '[data-id="travelCategory"]',
    departureFrom: '[data-id="departureFrom"]',
    multidestination: '[data-id="multiDestination"]',
    travelDatesFrom: '#travelDatesFrom',
    travelDatesTo: '#travelDatesTo',
    numberOfPerson:'[data-id="numberOfPerson"]',
    ageAtDeparture:'#ageAtDeparture1',
    pricePerPerson: '#pricePerPerson1',
    promotionCode: '#promotionCode',
    submit: '#submit',
    error:'.text.ng-binding.ng-scope',
};

describe('Book a trip page', function() {
     it('should display the valid page title', function () {
        travelPage.waitForPage();
        assert.equal(browser.getTitle(), 'Allianz Booking Path');
    });

    it('should show 6 steps menu to book a trip', function () {
        const menu = browser.elements(ELEMENTS.menu);
        assert.strictEqual(menu.value.length, 6, 'Steps Menu available');
    });

    it('should require select a type of cover', function () {
        browser.pause(3000);
        var typeOfCoverElement = browser.element(ELEMENTS.typeOfCover)
        typeOfCoverElement.click();
        browser.keys('\uE004');
        browser.keys('\uE007');
    });

    it('should require select a travel category', function () {  
        var travelCategoryElement = browser.element(ELEMENTS.travelCategory)
        // browser.pause(1000);
        travelCategoryElement.click();
        browser.keys('\uE004');
        browser.keys('\uE007');
    });

    it('should require select a travel destination', function () {  
        // browser.pause(1000);
        var multidestinationElement = browser.element(ELEMENTS.multidestination)
        multidestinationElement.click();
        browser.keys('alemania');
        browser.pause(1000);
        browser.keys('\uE007');
        multidestinationElement.click();
    });

    it('should require select the travel date from', function () {  
        //browser.pause(2000);
        var travelDatesFromElement = browser.element(ELEMENTS.travelDatesFrom)
        //browser.pause(500);
        console.log(travelDatesFromElement)
        travelDatesFromElement.click();
        browser.keys('03/01/2019');
        travelDatesFromElement.click();
    });

    it('should require select the travel date to', function () {  
        // browser.pause(500);
        var travelDatesToElement = browser.element(ELEMENTS.travelDatesTo)
        // browser.pause(500);
        console.log(travelDatesToElement)
        travelDatesToElement.click();
        browser.keys('23/01/2019');
        travelDatesToElement.click();
    });

    it('should require the number of persons', function () { 
        var numberOfPersonElement = browser.element(ELEMENTS.numberOfPerson)
        // browser.pause(500);
        numberOfPersonElement.click();
        browser.keys('\uE004');
        browser.keys('\uE007');
    });

    it('should require the age of person involed', function () { 
        var ageOfPersonElement = browser.element(ELEMENTS.ageAtDeparture)
        // browser.pause(500);
        ageOfPersonElement.click();
        browser.keys('33');
    });

    it('should require the price per person', function () { 
        var pricePerPersonElement = browser.element(ELEMENTS.pricePerPerson)
        // browser.pause(500);
        pricePerPersonElement.click();
        browser.keys('1300');
    });

    it('should require a promotion code', function () { 
        // browser.pause(500);
        var promotionCodeElement = browser.element(ELEMENTS.promotionCode);
        promotionCodeElement.clearElement();
        promotionCodeElement.setValue("PromotionCode123");
    });

    it('should calculate', function () { 
        // browser.pause(500);
        var submitElement = browser.element(ELEMENTS.submit);
        assert.equal(submitElement.getText(),"Calcular ahora");
        submitElement.click();
        browser.pause(5000);
    });
    it('should show an error message related invalid information', function () { 
        // browser.pause(500);
        var errorElement = browser.element(ELEMENTS.error);
        console.log(errorElement.getText());
        browser.isExisting(ELEMENTS.error);
        //assert.equal(errorElement.getText(), 'Error al procesar la información. Por favor, comprueba que la información es correcta. Si persiste, ponte en contacto con nosotros. Gracias.');
        browser.pause(5000);
    });
});