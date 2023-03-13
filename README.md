The first step in running a Cypress test is running Cypress, which you can do by opening the command line & running `npx cypress open`. A window that looks like this will open in your default browser:

![running_test1](https://user-images.githubusercontent.com/3933061/224732094-80cbd037-414a-4212-b753-084605d17471.png)


Choose the E2E Testing option, then choose your preferred browser.

![running_test2](https://user-images.githubusercontent.com/3933061/224732281-6bb46259-5a26-47fd-9264-62b4ea5411a1.png)


You'll be redirected to a directory contains all of your `e2e` tests. Click `new_contact.cy.js`, and the tests in that file will run automatically (note: the tests in the aforementioned file will all fail; this is expected).

![running_test3](https://user-images.githubusercontent.com/3933061/224732360-896c9e0b-7004-4999-90c4-c333406bf1c8.png)

If you want to run an individual test in `new_contact.cy.js`, open the file in a text editor.

![running_test5](https://user-images.githubusercontent.com/3933061/224732408-ba63f910-b6f9-4469-9719-fd3b189a63b0.png)

Add `x` to the `it` next to the test/s you'd like to leave out. When the individual test runs, you'll see the test name without it running.

![running_test6](https://user-images.githubusercontent.com/3933061/224732458-a995ee66-37cd-4aec-a468-7ae048d79297.png)

![running_test7](https://user-images.githubusercontent.com/3933061/224732717-91035ec7-8cec-4de1-82df-12f05556b836.png)

You can also add `x` next to the `describe` if you'd like to leave out the entire suite, and then you'll see the describe name without it running.

![running_testA](https://user-images.githubusercontent.com/3933061/224732965-f3055c0a-eacf-4b8c-b15b-9e948dfd5c98.png)

![running_test_xdescribe](https://user-images.githubusercontent.com/3933061/224733721-90603bd5-07de-4752-a941-1b8c8fbadb79.png)

