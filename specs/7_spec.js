// spec.js
describe('Protractor Sauce Demo Web App', function() {
  it('should greet the named user', function() {
    browser.executeScript("sauce:context=Going to 'Sauce Demo'");
    browser.get('https://www.saucedemo.com');

    browser.executeScript("sauce:context=Inputing user in the user input field");
    var userinput = document.querySelector('#user-name');
    userinput.sendKeys('standard_user');

    browser.executeScript("sauce:context=Inputing user password in the password input field");
    var passwordinput = ocument.querySelector('#password');
    passwordinput.sendKeys('secret_sauce');

    browser.executeScript("sauce:context=Clicking on the login button");
    var loginbutton = document.querySelector('#login_button_container > div > form > input.btn_action');

    browser.executeScript("sauce:context=Clicking on the Hamburger Icon");
    var hamburgericon = document.querySelector('menu_button_container > div > div:nth-child(3) > div > button');
    hamburgericon.click();


    browser.executeScript("sauce:context=Asserting 'Logout' text is present");
    var value = element(by.css('#logout_sidebar_link'));
    expect(value.getText()).toEqual('Logout');
 
    browser.executeScript("sauce:context=Clicking on the Logout link");
    element(by.css('#logout_sidebar_link')).click();



  });
});
