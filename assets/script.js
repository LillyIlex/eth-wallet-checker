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

//click event for modal button - function
$("modal-button").on("click", function () {

})
// pull user input into wallet Key var
var walletKey = $("#wallet-key:text").val()
//


//var walletKeyTest = "0x838fD718955cF139ef03fA187AD0E58D2EB04Af3"
var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + walletKeyTest +"&tag=latest&apikey=" + apiKey


//console.log(walletURL)

//AJAX TARGETING WALLET BALANCE
$.ajax({
    url: walletURL,
    method: "GET"
}).then(function (response) {
    // console.log(response)
    var weiResult = response.result
    var ethBalance = (weiResult  / 1000000000000000000).toFixed(4)
    console.log(ethBalance)
    //display balance 
    $("#balanceDisplay").append(ethBalance)
})


//MODAL

    //when yes button is clicked -> get text input from the wallet search box -> push into local storage
    
    //checks for the yes button on the modal being clicked
    $("#modalYes").on("click", function(){

        //gets the wallet key that was inputted
        let keyValue = $("#wallet-key").val();

        //saved the key to the local storage
        localStorage.setItem("walletKey", keyValue);

        $('#exampleModal').modal().hide()
    })

    $("#modalNo").on("click", function(){

        $('#exampleModal').modal().hide();
    })









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