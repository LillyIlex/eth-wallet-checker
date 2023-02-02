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
    console.log(safe + " " + proposed + " " + fast)
})





//click event for modal button - function
$("#modal-button").on("click", function(){

})


//CLICK EVENT FOR GO BUTTON

$("#go-button").on("click", function(){
    // pull user input into wallet Key var
    var walletKeyInput = $("#wallet-key:text").val()
    var walletKey = walletKeyInput
//var walletKeyTest = "0xf5fC2431947f214995eFc4Bb6ED6dea09e968828"
var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + walletKey +"&tag=latest&apikey=" + apiKey
//console.log(walletURL)
 
 localStorage.setItem("walletKey", walletKey);

//trigger modal


 //if save then append to search history
$(function () {
    $("#1").append(walletKey)
})




//AJAX TARGETING WALLET BALANCE
$.ajax({
    url: walletURL,
    method: "GET"
}).then(function (response) {
   // console.log(response)
    var weiResult = response.result
    var ethBalance = (weiResult  / 1000000000000000000).toFixed(3)
   
    //display balance 
    //console.log(ethBalance)
})
})


//MODAL


//LOCAL STORAGE
// local save to client side storage, Save what coin you are tracking, display last 10 searches?

//clear button
/*$(".clearBtn").on("click", function() {
     localStorage.clear()
   });*/

//TIME DISPLAY
/* Current date and time from moment.js
    // DATE & TIME FROM MOMENT.JS
var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm a'));
};
$(document).ready(function () {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

*/

    //SET INTERVAL 
/* function setInterval() {
    for () {
}, 1000;
} */