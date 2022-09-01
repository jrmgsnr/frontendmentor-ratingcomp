var btn = document.querySelectorAll(".rating-buttons button");
var submitBtn = document.querySelector("#submit-btn");
var rateCard = document.querySelector(".rating-card");
var thankCard = document.querySelector(".thank-card");
var userRating;

submitBtn.addEventListener("click", submitRate);
for(var i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", btnChose);  
}

function btnChose() {
    for(var i = 0; i < btn.length; i++){
        btn[i].classList.remove("active");
    }
    userRating = this.innerHTML;
    buttonAnimation(userRating);
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("#b" + currentKey);
    activeButton.classList.add("active");
}

function submitRate() {
    rateCard.classList.add("hide");
    thankCard.classList.remove("hide");

    document.querySelector(".result p").innerHTML = "You selected " + userRating + " out of 5";
}