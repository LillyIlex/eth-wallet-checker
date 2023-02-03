var apiKey = "YX7AA3H64Z229JBGCQPVYYE6Z8MF5NUC5T"
var gasURL = "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=" + apiKey
//console.log(gasURL)

//ajax to target gas
//function setInterval() {
$.ajax({
    url: gasURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
    var safe = response.result.SafeGasPrice
    var proposed = response.result.ProposeGasPrice
    var fast = response.result.FastGasPrice
    //console.log(safe + " " + proposed + " " + fast)
    $("#safeGas").append(safe)
    $("#proposedGas").append(proposed)
    $("#fastGas").append(fast)

    //}), 1000;
})

//MODAL

//when yes button is clicked -> get text input from the wallet search box -> push into local storage

//checks for the yes button on the modal being clicked
$("#modalYes").on("click", function () {
    //clear wallet key input
    $("#wallet-key").val("");

    //gets the wallet key that was inputted
    let keyValue = $("#wallet-key").val();

    //var walletKeyTest = "0xf5fC2431947f214995eFc4Bb6ED6dea09e968828"
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + keyValue + "&tag=latest&apikey=" + apiKey

    //AJAX TARGETING WALLET BALANCE
    $.ajax({
        url: walletURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response)
        var weiResult = response.result

        var ethBalance = (weiResult / 1000000000000000000).toFixed(4)
        console.log(ethBalance)
        //display balance 
        $("#balanceDisplay").append(ethBalance)
    });

    //saved the key to the local storage
    localStorage.setItem("walletKey", keyValue);

    $('#exampleModal').modal().hide()
})

$("#modalNo").on("click", function () {
   $("#wallet-key").val("");

    $('#exampleModal').modal().hide();

    let keyValue = $("#wallet-key").val();
    //var walletKeyTest = "0xf5fC2431947f214995eFc4Bb6ED6dea09e968828"
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + keyValue + "&tag=latest&apikey=" + apiKey


    $.ajax({
        url: walletURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response)
        var weiResult = response.result

        var ethBalance = (weiResult / 1000000000000000000).toFixed(4)
        console.log(ethBalance)
        //display balance 
        $("#balanceDisplay").append(ethBalance)
    });

})



 //if save then append to search history
/*
$(function () {
  $("#1.innerHTML").localStorage.getItem(keyValue)
   $("#1").append(keyValue)
}) */







//FORM - wallet key


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