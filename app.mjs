function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  const networkLogo = document.querySelector(".network-logo");
  const userNum = document.getElementById("Phone-number");




  userNum.addEventListener("input", getVal);

  const mtnCodes = [
    "0803",
    "0806",
    "0814",
    "0810",
    "0813",
    "0816",
    "0703",
    "0903",
    "0906",
  ];

  const etisalatCodes = ["0809", "0817", "0818", "0908", "0909"];

  const airtelCodes = [
    "0802",
    "0808",
    "0812",
    "0708",
    "0701",
    "0902",
    "0901",
    "0907",
  ];

  const gloCodes = ["0805", "0807", "0811", "0815", "0705", "0905"];

  function getVal() {
    for (let i = 0; i < mtnCodes.length; i++) {
      if (userNum.value.startsWith(mtnCodes[i])) {
        networkLogo.innerHTML =
          '<img class="mtn-logo" src="./images/mtn-logo.png" alt="" />';
      }
    }
    for (let i = 0; i < etisalatCodes.length; i++) {
      if (userNum.value.startsWith(etisalatCodes[i])) {
        networkLogo.innerHTML =
          '<img class="etisalat-logo" src="./images/etisalat-logo.png" alt=""/>';
      }
    }
    for (let i = 0; i < airtelCodes.length; i++) {
      if (userNum.value.startsWith(airtelCodes[i])) {
        networkLogo.innerHTML =
          '<img class="airtel-logo" src="./images/airtel-logo.png" alt="" />';
      }
    }
    for (let i = 0; i < gloCodes.length; i++) {
      if (userNum.value.startsWith(gloCodes[i])) {
        networkLogo.innerHTML =
          '<img class="glo-logo" src="./images/glo-logo.jpg" alt="" />';
      }
    }
  }

  getVal();

}




// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //  console.log('make magic in here!');

