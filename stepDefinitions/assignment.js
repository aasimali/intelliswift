const assignmentPage = require('../pages/assignmentPage');
const { expect, assert } = require('chai');;

module.exports = function () {

    /***************************************************** This method opens the webpage ********************************************/
    this.Given(/^Open "([^"]*)" website$/, async function (url) {
        try {
            await assignmentPage.OpenWebUrl(url);
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /***************************************************** This method is for typing ************************************************/
    this.When(/^User type "([^"]*)" in the "([^"]*)" text field$/, async function (text, field) {
        try {
            await assignmentPage.type(text, field);
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /****************************************************** This method clicks on button *******************************************/
    this.When(/^User click on "([^"]*)" button$/, async function (button) {
        try {
            await assignmentPage.clickOnButton(button);
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /****************************************************** This method clicks on Search icon **************************************/
    this.When(/^User click on "([^"]*)" option placed in top header$/, async function (icon) {
        try {
            await assignmentPage.clickOnButton(icon);
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

    /****************************************************** This method clicks on Search icon **************************************/
    this.When(/^User Verify that "([^"]*)" is displayed in the search result$/, async function (searchTerm) {
        try {
            let isVerified = await assignmentPage.verifyResult(searchTerm);
            expect(isVerified).to.be.true;
        }
        catch (err) {
            assert.fail('error is: ' + err);
        }
    });

}; // end of main function
