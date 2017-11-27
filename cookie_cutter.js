test=0;

function logCookies(cookies) {
  for (let cookie of cookies) {
  	test+=1;
    // console.log(test + " " + cookie.domain);
    // console.log("Name: " + cookie.name);
    // console.log("Value: " + cookie.value);

  }
  console.log("Number of cookies: " + test)
}

var gettingAll = browser.cookies.getAll({
  // name: "*"
});

gettingAll.then(logCookies);

browser.cookies.onChanged.addListener(function(changeInfo) {
  console.log('Cookie changed: ' +
              '\n * Cookie: ' + JSON.stringify(changeInfo.cookie) +
              '\n * Cause: ' + changeInfo.cause +
              '\n * Removed: ' + changeInfo.removed);
});


function handleActivated(activeInfo) {
  console.log("Tab " + activeInfo.tabId +
              " was activated");
  console.log("URL: " + activeInfo.url)
}

browser.tabs.onActivated.addListener(handleActivated);