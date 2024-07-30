const button = document.querySelector(".diceButton");
const adviceCont = document.querySelector(".quote");
const counter = document.querySelector(".counter");

const advice = (advice, id) => {
  adviceCont.innerText = '"' + advice + '"';
  counter.innerText = id;
};

const getAdvice = async () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      advice(data.slip.advice, data.slip.id);
    })
    .catch((error) => {
      console.log(error);
    });
};

button.addEventListener("click", function () {
  getAdvice();
});

setInterval(() => (enabled = true), 1000);
