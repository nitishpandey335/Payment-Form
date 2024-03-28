var userform = document.getElementById("userform");

function showtheAddressform() {
    userform.style.display = "flex";
    userform.style.flexDirection = "column";
}

function hidetheaddressform() {
    userform.style.display = "none";
}

function addtheaddress() {
    let name = document.getElementById("name1");
    let phone = document.getElementById("number1");
    let address1 = document.getElementById("housenumber");
    let address2 = document.getElementById("streetname");
    document.getElementById("name").innerHTML = name.value;
    document.getElementById("number").innerHTML = phone.value;
    document.getElementById("hno").innerHTML = address1.value;
    document.getElementById("stn").innerHTML = address2.value;
    document.getElementById("userform").style.display = "none";
    document.getElementById("all").style.display = "flex";
}

var upi = document.getElementById("upi");
upi.addEventListener("click", () => {
    var pay = document.getElementById("pay");
    pay.innerHTML = "Pay through UPI";
    pay.style.display = "flex";
})

var card = document.getElementById("card");
card.addEventListener("click", () => {
    var pay = document.getElementById("pay");
    pay.innerHTML = "Pay through Card";
    pay.style.display = "flex";
})

var cash = document.getElementById("cash");
cash.addEventListener("click", () => {
    var pay = document.getElementById("pay");
    pay.innerHTML = "Confirm Order";
    pay.style.display = "flex";
})