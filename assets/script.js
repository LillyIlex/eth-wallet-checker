var apiKey = "YX7AA3H64Z229JBGCQPVYYE6Z8MF5NUC5T"
var gasURL = "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=" + apiKey
//console.log(gasURL)
//saved the content of localstorage in the variable preSave
var preSave = JSON.parse(localStorage.getItem("walletSave"));

 //first check if presave is empty -> 
 if (preSave===null){
    console.log("empty")
}

else{
    console.log(preSave)
}

//function preSave

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


//CLICK EVENT FOR GO BUTTON

$("#go-button").on("click", function () {

    // pull user input into wallet Key var
    var walletKeyInput = $("#wallet-key:text").val()
    var walletKey = walletKeyInput

    console.log(walletKey)
    //var walletKeyTest = "0xf5fC2431947f214995eFc4Bb6ED6dea09e968828"
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + walletKey + "&tag=latest&apikey=" + apiKey

    //console.log(walletURL)

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

})

//MODAL


//when yes button is clicked -> get text input from the wallet search box -> push into local storage

//checks for the yes button on the modal being clicked
$("#modalYes").on("click", function () {

    //gets the wallet key that was inputted
    let keyValue = $("#wallet-key").val();


        //saved the key to the local storage
       // localStorage.setItem("walletKey", keyValue);

       var walletSave = {
        walletKey: keyValue,
        }

        var prevSave = JSON.parse(localStorage.getItem("walletSave") || '[]');

        prevSave.push(walletSave);
        localStorage.setItem("walletSave", JSON.stringify(prevSave));


        $('#exampleModal').modal().hide()
    })
        //hides the modal when NO save button is clicked
    $("#modalNo").on("click", function(){

        $('#exampleModal').modal().hide();
    })


    
    function preSaveAppend(){
        //looping through the presave array
        for (i=0; i<preSave.length; i++){
            //for every position in the presave array, it will look into the array and get the position value
            var walletKeyId = preSave[i].walletKey;
            //console.log(walletKeyId)

            var buttonPosition = i+1;

            if (buttonPosition===1) {
                $("#1").append(walletKeyId)
            } else if (buttonPosition===2) {
                $("#2").append(walletKeyId)
            }
            else if (buttonPosition===3) {
                $("#3").append(walletKeyId)
            }
            else if (buttonPosition===4) {
                $("#4").append(walletKeyId)
            }
            else if (buttonPosition===5) {
                $("#5").append(walletKeyId)
            }
        }
    }
    //calling the function here
    preSaveAppend();
/*
    $(function () {
        $("#1").append(localStorage.getItem("walletSave"))
    })*/






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