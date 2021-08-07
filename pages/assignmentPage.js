const locator = require('../locators/locators.json');
const test_data = require('../testData/test_data.json');
const GenericMethod = require('./genericPage');
const { assert } = require('chai');
const { browser, element } = require('protractor');
const expected = protractor.ExpectedConditions;
const Max_TimeOut = 30000;

let assignmentPage = function () {

    this.OpenWebUrl = async function (url) {
        switch (url) {
            case 'hollandamerica':
                browser.waitForAngularEnabled(false);
                url = test_data.hollandamerica;
                break;

            case 'seabourn':
                browser.waitForAngularEnabled(false);
                url = test_data.seabourn;
                break;

            default:
                assert.fail('No case found')
        }
        try {
            await browser.get(url);
        }
        catch (err) {
            assert.fail('Error is: ' + err);
        }
    }

    this.type = async function (text, field) {
        switch (field) {
            case 'Search':
                field = GenericMethod.SetLocator(locator.searchField);
                break;

            default:
                assert.fail('No case found for: ' + field)
        }

        try {
            await browser.wait(expected.visibilityOf(field, Max_TimeOut));
            await browser.actions().mouseMove(field).perform();
            await field.sendKeys(text);
        }
        catch (err) {
            assert.fail('Error is: ' + err);
        }
    }

    this.clickOnButton = async function (button) {
        switch (button) {
            case 'Search':
                button = GenericMethod.SetLocator(locator.searchButton);
                break;

            case 'Search icon':
                button = GenericMethod.SetLocator(locator.searchIcon);
                break;

            case 'Close':
                button = GenericMethod.SetLocator(locator.closeIcon);
                break;

            default:
                assert.fail('No case found for: ' + button)
        }
        await browser.wait(expected.visibilityOf(button, Max_TimeOut));
        await browser.actions().mouseMove(button).perform();
        await button.click();
    }

    this.verifyResult = async function (searchTerm) {
        searchResult = element(by.xpath(locator.searchResult.locator.replace('{searchTerm}', searchTerm)));
        await browser.wait(expected.visibilityOf(searchResult, Max_TimeOut));
        return await searchResult.isPresent();   
    }
}
module.exports = new assignmentPage;