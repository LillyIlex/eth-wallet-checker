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


//AJAX
/* $.ajax({
    url: ,
    method: "GET"
}).then(function (response) {
    console.log(response)
}) */


//MODAL

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