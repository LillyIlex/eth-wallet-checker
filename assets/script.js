var apiKey = "YX7AA3H64Z229JBGCQPVYYE6Z8MF5NUC5T"
var gasURL = "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=" + apiKey
//console.log(gasURL)

//ajax to target gas
$.ajax({
    url: gasURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
    var safe = response.result.SafeGasPrice
    var proposed = response.result.ProposeGasPrice
    var fast = response.result.FastGasPrice
    console.log( safe + " " + proposed + " " + fast)
})

//modal

//form submit

//local storage

//clear button
