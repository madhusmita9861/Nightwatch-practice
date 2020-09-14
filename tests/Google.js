module.exports = {
    '@tags': ['google'],
    '@disabled': true,
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';

        const page = browser.page.googleAdvancedSearch();

        //const mainQueryInputSelector = 'input[name="as_q"]';
        //const languageDropdownOpenerSelector = '#lr_button';
        //const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        //const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        //const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        //const submitButtonSelector = '.jfk-button[type="submit"]';

        

        page
           .navigate()
           .setQuery(mainQuery)
           .selectFilter('@languageDropdown','lang_it')
           .selectFilter('@lastUpdateDropdown','m')
           .search();

       // browser
            //.url('https://www.google.com/advanced_search')
            //.setValue(mainQueryInputSelector, mainQuery)
            //.click(languageDropdownOpenerSelector)
            //.click(languageDropdownValueSelector)
            //.selectFilter('language','it')
            //.click(lastUpdateDropdownOpenerSelector)
           // .click(lastUpdateDropdownValueSelector)
            //.click(submitButtonSelector)

        browser
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Time period is last month')

    
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`
        const resultsPageLanguageSelector = '[aria-label="Search Italian pages"]'
        const resultsPagelastUpdateSelector = '[aria-label="Past month"]'
    


        browser.assert.visible(resultsPageQuerySelector,'UI: Elon Musk is set in the query input');
        browser.assert.containsText(resultsPageLanguageSelector,'Search Italian pages','UI: Language is set to Italian');
        browser.assert.containsText(resultsPagelastUpdateSelector,'Past month','UI: Last update is set to Past month');
        

        browser.saveScreenshot('tests_output/google.png')
    }

        
}

