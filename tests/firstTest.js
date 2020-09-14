       module.exports = {
           'my first test case'(browser) {
               browser
               .url('https://news.ycombinator.com/')
               .waitForElementVisible('.hnname')
               .assert.containsText(".hnname", "Hacker News" );

           }

       }