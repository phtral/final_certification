const headerSignUpBtnEl = document.querySelector(".header-sign-up-btn");
const tryForFreeBtnEl = document.querySelector(".try-for-free-btn");
const staterPriceOrderBtnEl = document.querySelector(".stater-price-order-btn");
const premiumPriceOrderBtnEl = document.querySelector(
  ".premium-price-order-btn"
);
const standartPriceOrderBtnEl = document.querySelector(
  ".standart-price-order-btn"
);
const freeTrialBtnEl = document.querySelector(".free-trial-btn");

headerSignUpBtnEl.addEventListener("mouseover", function (e) {
  headerSignUpBtnEl.classList.add("header-sign-up-btn-mouseover");
});

headerSignUpBtnEl.addEventListener("mouseout", function (e) {
  headerSignUpBtnEl.classList.remove("header-sign-up-btn-mouseover");
});

tryForFreeBtnEl.addEventListener("mouseover", function (e) {
  tryForFreeBtnEl.classList.add("try-for-free-btn-mouseover");
});

tryForFreeBtnEl.addEventListener("mouseout", function (e) {
  tryForFreeBtnEl.classList.remove("try-for-free-btn-mouseover");
});

staterPriceOrderBtnEl.addEventListener("mouseover", function (e) {
  staterPriceOrderBtnEl.classList.add("stater-price-order-btn-mouseover");
});

staterPriceOrderBtnEl.addEventListener("mouseout", function (e) {
  staterPriceOrderBtnEl.classList.remove("stater-price-order-btn-mouseover");
});

premiumPriceOrderBtnEl.addEventListener("mouseover", function (e) {
  premiumPriceOrderBtnEl.classList.add("premium-price-order-btn-mouseover");
});

premiumPriceOrderBtnEl.addEventListener("mouseout", function (e) {
  premiumPriceOrderBtnEl.classList.remove("premium-price-order-btn-mouseover");
});

standartPriceOrderBtnEl.addEventListener("mouseover", function (e) {
  standartPriceOrderBtnEl.classList.add("standart-price-order-btn-mouseover");
});

standartPriceOrderBtnEl.addEventListener("mouseout", function (e) {
  standartPriceOrderBtnEl.classList.remove(
    "standart-price-order-btn-mouseover"
  );
});

freeTrialBtnEl.addEventListener("mouseover", function (e) {
  freeTrialBtnEl.classList.add("free-trial-btn-mouseover");
});

freeTrialBtnEl.addEventListener("mouseout", function (e) {
  freeTrialBtnEl.classList.remove("free-trial-btn-mouseover");
});

const passwordUserForm1El = document.querySelector(".password-user-form-1");
const passwordUserForm2El = document.querySelector(".password-user-form-2");

document.querySelector(".free-trial-btn").onclick = function () {
  const userPassFirst = passwordUserForm1El.value;
  const userPassSecond = passwordUserForm2El.value;
  console.log(userPassFirst);

  if (userPassFirst == "") {
    passwordUserForm1El.classList.add("password-error");
    passwordUserForm2El.classList.add("password-error");
    passwordUserForm1El.classList.remove("password-validate");
    passwordUserForm2El.classList.remove("password-validate");
  } else if (userPassFirst != userPassSecond) {
    passwordUserForm1El.classList.add("password-error");
    passwordUserForm2El.classList.add("password-error");
    passwordUserForm1El.classList.remove("password-validate");
    passwordUserForm2El.classList.remove("password-validate");
  } else if (userPassFirst == userPassSecond) {
    passwordUserForm1El.classList.add("password-validate");
    passwordUserForm2El.classList.add("password-validate");
  }
  return true;
};
