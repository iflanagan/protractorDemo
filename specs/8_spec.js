browser.get('https://www.saucedemo.com/');
browser.getPageSource().then(function (res) {
  console.log('Page source code is-' + res);
});
