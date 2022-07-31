const inputNumber = document.querySelector('#input-number').innerHTML = '080345'
const networkLogo = document.querySelector('network_logo')
console.log(inputNumber)

if (inputNumber.startsWith('0803' && '0813')) {
  networkLogo.innerHTML = '<img src="./images/mtn-logo.png" />'
}