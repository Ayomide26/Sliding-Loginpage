const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const big = document.querySelector(".big-container");


function slide() {
big.classList.add("sign-mode");
}

function slides() {
  big.classList.remove("sign-mode");
  }