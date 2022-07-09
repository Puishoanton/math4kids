const option1 = document.getElementById("option1"),
  option2 = document.getElementById("option2"),
  option3 = document.getElementById("option3");
var answer = 0;

function generate_equation() {
  let num1 = Math.floor(Math.random() * 13),
    num2 = Math.floor(Math.random() * 13),
    dummyAnswer1 = Math.floor(Math.random() * 10),
    dummyAnswer2 = Math.floor(Math.random() * 10),
    allAnswers = [],
    switchAnswers = [];

  answer = eval(num1 + num2);

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--; ) {
    switchAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)
    );
  }


  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
}

option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    setTimeout(() => {
      document.querySelector(".wrapper").style.background =
        "rgba(0, 217, 0, 0.556)";
    }, 10);
    setTimeout(() => {
      document.querySelector(".wrapper").style.background = "";
    }, 120);
    generate_equation();
  } else {
    setTimeout(() => {
      document.querySelector(".wrapper").style.background = "red";
    }, 10);
    setTimeout(() => {
      document.querySelector(".wrapper").style.background = "";
    }, 120);
  }
});

option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    setTimeout(() => {
      document.querySelector(".wrapper").style.background =
        "rgba(0, 217, 0, 0.556)";
    }, 10);
    setTimeout(() => {
      document.querySelector(".wrapper").style.background = "";
    }, 120);
    generate_equation();
  } else {
    setTimeout(() => {
      document.querySelector(".wrapper").style.background = "red";
    }, 10);
    setTimeout(() => {
      document.querySelector(".wrapper").style.background = "";
    }, 120);
  }
});

option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    setTimeout(() => {
      document.querySelector(".wrapper").style.background =
        "rgba(0, 217, 0, 0.556)";
    }, 10);
    setTimeout(() => {
      document.querySelector(".wrapper").style.background = "";
    }, 120);
    generate_equation();
  } else {
    setTimeout(() => {
      document.querySelector(".wrapper").style.background = "red";
    }, 10);
    setTimeout(() => {
      document.querySelector(".wrapper").style.background = "";
    }, 120);
  }
});

generate_equation();
