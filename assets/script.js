var apiKey = "YX7AA3H64Z229JBGCQPVYYE6Z8MF5NUC5T"
var gasURL = "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=" + apiKey

//saved the content of localstorage in the variable preSave
var preSave = JSON.parse(localStorage.getItem("walletSave"));


//first check if presave is empty -> 
if (preSave === null) {
    console.log("empty")
}
else {
    preSaveAppend(preSave);

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

//checks for the yes button on the modal being clicked
$("#modalYes").on("click", function () {

    //gets the wallet key that was inputted
    var keyValue = document.getElementById("wallet-key").value;


    //var walletKeyTest = "0xf5fC2431947f214995eFc4Bb6ED6dea09e968828"
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + keyValue + "&tag=latest&apikey=" + apiKey

    var walletSave = {
        walletKey: keyValue,
    }

    var prevSave = JSON.parse(localStorage.getItem("walletSave") || '[]');

    //console.log(preSave)
    prevSave.push(walletSave);
    localStorage.setItem("walletSave", JSON.stringify(prevSave));
    var preSaveUpdate = JSON.parse(localStorage.getItem("walletSave"))
    preSaveAppend(preSaveUpdate)

    //AJAX TARGETING WALLET BALANCE
    $.ajax({
        url: walletURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response)
        var weiResult = response.result
        var ethBalance = (weiResult / 1000000000000000000).toFixed(4)
        //display balance 
        $("#balanceDisplay").append(ethBalance)

    })
        ;

    //saved the key to the local storage
    localStorage.setItem("walletKey", keyValue);
    $('#exampleModal').modal().hide()
    $("#wallet-key").val("");
})

//if no save button clicked on modal
$("#modalNo").on("click", function () {

    $('#exampleModal').modal().hide();

    let keyValue = $("#wallet-key").val();
    //var walletKeyTest = "0xf5fC2431947f214995eFc4Bb6ED6dea09e968828"
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + keyValue + "&tag=latest&apikey=" + apiKey

    $.ajax({
        url: walletURL,
        method: "GET"
    }).then(function (response) {

        var weiResult = response.result
        var ethBalance = (weiResult / 1000000000000000000).toFixed(4)

        //display balance 
        $("#balanceDisplay").append(ethBalance)
    });
    $("#wallet-key").val("");
})


function preSaveAppend(preSaveArray) {

    console.log(preSaveArray.length)
    if (preSaveArray === null) {
        console.log(null);
    }
    else {
        //looping through the presave array
        for (i = 0; i < preSaveArray.length; i++) {
            //for every position in the presave array, it will look into the array and get the position value
            var walletKeyId = preSaveArray[i].walletKey;

            //creates a count position so the corresponding save goes to the right button
            var buttonPosition = i + 1;

            //checks what button position the loop is at and if the button has text yet or not to stop duplicate entries 
            if (buttonPosition === 1 & $('#1').is(':empty')) {
                $("#1").append(walletKeyId)
            } else if (buttonPosition === 2 & $('#2').is(':empty')) {
                $("#2").append(walletKeyId)
            }
            else if (buttonPosition === 3 & $('#3').is(':empty')) {
                $("#3").append(walletKeyId)
            }
            else if (buttonPosition === 4 & $('#4').is(':empty')) {
                $("#4").append(walletKeyId)
            }
            else if (buttonPosition === 5 & $('#5').is(':empty')) {
                $("#5").append(walletKeyId)
            }

        }
    }

    $("#go-button").on("click", function () {
        $("#balanceDisplay").empty();

        var preSaveUpdate = JSON.parse(localStorage.getItem("walletSave"))

        if (preSaveUpdate === null) {
            $("#maxSave").css("display", "none");
            $("#modalYes").attr("disabled", false)
        }
        else if (preSaveUpdate.length >= 5) {
            $("#maxSave").css("display", "block");
            $("#modalYes").attr("disabled", true)
        }
        else if (preSaveUpdate.length < 5) {
            $("#maxSave").css("display", "none");
            $("#modalYes").attr("disabled", false)
        }

    })
}


//clear button
$("#clearBtn").on("click", function () {
    localStorage.clear();
    $("#1").empty();
    $("#2").empty();
    $("#3").empty();
    $("#4").empty();
    $("#5").empty();

});

//code below for if the key save buttons are clicked
$("#1").click(function () {
    $("#balanceDisplay").empty();
    var savedKey = this.textContent;
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + savedKey + "&tag=latest&apikey=" + apiKey;

    //AJAX TARGETING WALLET BALANCE
    $.ajax({
        url: walletURL,
        method: "GET"
    }).then(function (response) {
        var weiResult = response.result
        var ethBalance = (weiResult / 1000000000000000000).toFixed(4)
        $("#balanceDisplay").append(ethBalance)

    });

})
$("#2").click(function () {
    $("#balanceDisplay").empty();
    var savedKey = this.textContent;
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + savedKey + "&tag=latest&apikey=" + apiKey;

    //AJAX TARGETING WALLET BALANCE
    $.ajax({
        url: walletURL,
        method: "GET"
    }).then(function (response) {
        var weiResult = response.result
        var ethBalance = (weiResult / 1000000000000000000).toFixed(4)
        $("#balanceDisplay").append(ethBalance)

    });

})
$("#3").click(function () {
    $("#balanceDisplay").empty();
    var savedKey = this.textContent;
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + savedKey + "&tag=latest&apikey=" + apiKey;

    //AJAX TARGETING WALLET BALANCE
    $.ajax({
        url: walletURL,
        method: "GET"
    }).then(function (response) {
        var weiResult = response.result
        var ethBalance = (weiResult / 1000000000000000000).toFixed(4)
        $("#balanceDisplay").append(ethBalance)

    });

})
$("#4").click(function () {
    $("#balanceDisplay").empty();
    var savedKey = this.textContent;
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + savedKey + "&tag=latest&apikey=" + apiKey;

    //AJAX TARGETING WALLET BALANCE
    $.ajax({
        url: walletURL,
        method: "GET"
    }).then(function (response) {
        var weiResult = response.result
        var ethBalance = (weiResult / 1000000000000000000).toFixed(4)
        $("#balanceDisplay").append(ethBalance)

    });

})
$("#5").click(function () {
    $("#balanceDisplay").empty();
    var savedKey = this.textContent;
    var walletURL = "https://api.etherscan.io/api?module=account&action=balance&address=" + savedKey + "&tag=latest&apikey=" + apiKey;

    //AJAX TARGETING WALLET BALANCE
    $.ajax({
        url: walletURL,
        method: "GET"
    }).then(function (response) {
        var weiResult = response.result
        var ethBalance = (weiResult / 1000000000000000000).toFixed(4)
        $("#balanceDisplay").append(ethBalance)

    });

})

//Current date and time from moment.js
    // DATE & TIME FROM MOMENT.JS
var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd  Do MMMM YYYY ｜ h:mm a'));
};
$(document).ready(function () {
    datetime = $('#date-time')
    update();
    setInterval(update, 1000);
});

