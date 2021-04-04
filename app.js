const number = Math.trunc(Math.ceil(Math.random() * 99));
const attempt = [0, 10]

const input = document.querySelector("input");
const button = document.querySelector("div > button");

const used = document.getElementsByClassName("container__text--used")[0];
const remaining = document.getElementsByClassName("container__text--remaining")[0];


button.addEventListener("click", numberCheck);

function numberCheck() {
  if (input.value == "") {
    alert("Please enter a number : ");
  } else {
    if (attempt[1] > 0) {
      if (input.value < 1 || input.value > 99 || isNaN(input.value) || parseInt(input.value) != input.value) {
        confirm(`Your entry ${input.value} is invalid.\nPlease enter an integer number : `);
        attempt[0] += 1;
        attempt[1] -= 1;
        used.textContent = attempt[0];
        remaining.textContent = attempt[1];
      } else if (input.value < number) {
        alert(`Your guess ${input.value} is low`);
        attempt[0] += 1;
        attempt[1] -= 1;
        used.textContent = attempt[0];
        remaining.textContent = attempt[1];
      } else if (input.value > number) {
        alert(`Your guess ${input.value} is high`);
        attempt[0] += 1;
        attempt[1] -= 1;
        used.textContent = attempt[0];
        remaining.textContent = attempt[1];
      } else if (input.value == number) {
        alert(`Your guess ${input.value} is right.
              CONGRATS!!!`);
        attempt[0] = 0;
        attempt[1] = 10;
        used.textContent = attempt[0];
        remaining.textContent = attempt[1];
      }
    } else {
      alert(`You failed. The number was ${number}. Try again`)
      attempt[0] = 0;
      attempt[1] = 10;
      used.textContent = attempt[0];
      remaining.textContent = attempt[1];
    }
  }
}
