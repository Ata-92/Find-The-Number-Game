let number = Math.trunc(Math.ceil(Math.random() * 99));
const attempt = [0, 10]

const input = document.querySelector("input");
const button = document.querySelector("div > button");

const used = document.getElementsByClassName("container__text--used")[0];
const remaining = document.getElementsByClassName("container__text--remaining")[0];

input.addEventListener("input", () => {
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }
})

input.addEventListener("keydown", (inputKey) => {
  if (inputKey.code == "Enter") {
    numberCheck();
  } else if (["e", "E", "+", "-", ",", "."].includes(inputKey.key)) {
    inputKey.preventDefault();
  }
});

button.addEventListener("click", numberCheck);

function numberCheck() {
  if (input.value == "") {
    alert("Please enter a number : ");
  } else if (attempt[1] > 1 && input.value != number) {
      if (input.value < number) {
      alert(`Your guess ${input.value} is low`);
    } else {
      alert(`Your guess ${input.value} is high`);
    }
    input.value = "";
    attempt[0] += 1;
    attempt[1] -= 1;
    used.textContent = attempt[0];
    remaining.textContent = attempt[1];
  } else {
    if (input.value == number) {
      alert(`Your guess ${input.value} is right.
              CONGRATS!!!`);
    } else {
      alert(`You failed. The number was ${number}. Try again`);
    }
    input.value = "";
    number = Math.trunc(Math.ceil(Math.random() * 99));
    attempt[0] = 0;
    attempt[1] = 10;
    used.textContent = attempt[0];
    remaining.textContent = attempt[1];
  }
}
