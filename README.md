# cypress_assessment

You can choose the environment on which you want to test in a few places. One of which would probably be the most helpful in earlier stages of development would be your local environment, which you can add to `cypress.config.js` in the root of this repository.

The first step in running a Cypress test is running Cypress, which you can do by opening the command line & running `npx cypress open`. A window that looks like this will open in your default browser:

[running_test1]

Choose the E2E Testing option, then choose your preferred browser.

[running_test2]

You'll be redirected to a directory contains all of your `e2e` tests. Click `new_contact.cy.js`, and the tests in that file will run automatically (note: the tests in the aforementioned file will all fail; this is expected).

[running_test3]

If you want to run an individual test in `new_contact.cy.js`, open the file in a text editor.

[running_test4]

Add `x` to the `it` next to the test you'd like to leave out, or next to the entire `describe` if you'd like to leave out the entire suite. When the individual test runs, you'll see the test name without it running.

[running_test6]

[running_test7]

And you'll see the describe name without it running when you add an `x` to `describe`.

[running_testA]

[running_testB]