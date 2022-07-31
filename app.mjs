function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  const inputNumber = document.querySelector('#input-number')
  const networkLogo = document.querySelector('network_logo')
  console.log(inputNumber)

  if (inputNumber.startsWith('0803' && '0813')) {
    networkLogo.innerHTML = '<img src="./images/mtn-logo.png" />'
  }
}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //  console.log('make magic in here!');

