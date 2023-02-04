var apiKey = "YX7AA3H64Z229JBGCQPVYYE6Z8MF5NUC5T"
var gasURL = "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=" + apiKey
//console.log(gasURL)
//saved the content of localstorage in the variable preSave
var preSave = JSON.parse(localStorage.getItem("walletSave"));


//first check if presave is empty -> 
if (preSave === null) {
    console.log("empty")
}

else {
    console.log(preSave)
}

//ajax to target gas

$(document).ready(function () {

    var update = function () {

        $.ajax({
            url: gasURL,
            method: "GET"
        }).then(function (response) {
            var safe = response.result.SafeGasPrice
            var proposed = response.result.ProposeGasPrice
            var fast = response.result.FastGasPrice
            console.log(safe + " " + proposed + " " + fast)

            $("#safeGas").empty()
            $("#proposedGas").empty()
            $("#fastGas").empty()

            $("#safeGas").append(safe)
            $("#proposedGas").append(proposed)
            $("#fastGas").append(fast)

        });

    }

    setInterval(update, 1000);

});

//CLICK EVENT FOR GO BUTTON

//when yes button is clicked -> get text input from the wallet search box -> push into local storage


//checks for the yes button on the modal being clicked
$("#modalYes").on("click", function () {
    //clear wallet key input


    //gets the wallet key that was inputted
    let keyValue = $("#wallet-key").val();

    //var walletKeyTest = "0xf5fC2431947f214995eFc4Bb6ED6dea09e968828"
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + keyValue + "&tag=latest&apikey=" + apiKey

    var walletSave = {
        walletKey: keyValue,
    }

    var prevSave = JSON.parse(localStorage.getItem("walletSave") || '[]');

    prevSave.push(walletSave);
    localStorage.setItem("walletSave", JSON.stringify(prevSave));


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

    function preSaveAppend() {
        //looping through the presave array
        for (i = 0; i < preSave.length; i++) {
            //for every position in the presave array, it will look into the array and get the position value
            var walletKeyId = preSave[i].walletKey;
            //console.log(walletKeyId)
    
            var buttonPosition = i + 1;
    
            if (buttonPosition === 1) {
                $("#1").append(walletKeyId)
            } else if (buttonPosition === 2) {
                $("#2").append(walletKeyId)
            }
            else if (buttonPosition === 3) {
                $("#3").append(walletKeyId)
            }
            else if (buttonPosition === 4) {
                $("#4").append(walletKeyId)
            }
            else if (buttonPosition === 5) {
                $("#5").append(walletKeyId)
            }
        }
    }
    //calling the function here
    preSaveAppend();
    
    //saved the key to the local storage
    localStorage.setItem("walletKey", keyValue);

    $('#exampleModal').modal().hide()
    $("#wallet-key").val("");
})

$("#modalNo").on("click", function () {


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
    $("#wallet-key").val("");
})

$("#go-button").on("click", function() {
    $("#balanceDisplay").empty()
})






//clear button

$("#clearBtn").on("click", function () {
    localStorage.clear();
     $("#1").empty();
     $("#2").empty();
     $("#3").empty();
      $("#4").empty();
      $("#5").empty();

});

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