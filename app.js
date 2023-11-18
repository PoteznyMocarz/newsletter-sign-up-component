let submitBtn = document.getElementById("submitBtn");
let dismissBtn = document.getElementById("dismissBtn");
let errorLabel = document.getElementById("errorState");
let infoContainer = document.querySelector(".container");
let succesContainer = document.querySelector(".succes-container");
let imgContainer = document.querySelector(".img-container");
let emailInput = document.getElementById("emailInput");
let userEmail = document.getElementById("userEmail");
let correct = /^([0-9a-zA-Z]([-\.\+\_\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
let check;

submitBtn.onclick = function() {
    if(emailInput.value.match(correct)) {
        infoContainer.classList.add("hidden");
        succesContainer.classList.remove("hidden");
        emailInput.classList.remove("errorBg");
        errorLabel.innerText = "";
        userEmail.innerText = emailInput.value;
    }

    else {
        errorLabel.innerText = "Valid email required";
        emailInput.classList.add("errorBg");
    }
};

dismissBtn.onclick = function() {
    infoContainer.classList.remove("hidden");
    succesContainer.classList.add("hidden");
    emailInput.value = "";
}

if (window.innerWidth <= 450) {
    imgContainer
      .querySelector('img')
      .setAttribute('src', 'assets/images/illustration-sign-up-mobile.svg')
  }