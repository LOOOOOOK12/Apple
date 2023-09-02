const burgir = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

const purchase = document.getElementsByClassName("purchase-Button");
const increase = document.getElementsByClassName("increase-BTN");
const decrease = document.getElementsByClassName("decrease-BTN");

const counter = document.getElementsByClassName("count");

let counts = [0, 0, 0, 0, 0, 0];

// Increase (+) button
for (var i = 0; i < increase.length; i++) {
  increase[i].addEventListener("click", function (index) {
    return function () {
      counts[index] += 1;
      counter[index].innerHTML = counts[index];
      updateCounterState(index); // Call the updateCounterState function
    };
  }(i));
}

// Decrease (-) button
for (var i = 0; i < decrease.length; i++) {
  decrease[i].addEventListener("click", function (index) {
    return function () {
      if (counts[index] > 0) {
        counts[index] -= 1;
        counter[index].innerHTML = counts[index];
      }
      updateCounterState(index); // Call the updateCounterState function
    };
  }(i));
}

function updateCounterState(index) {
  if (counts[index] === 0) {
    counter[index].setAttribute("disabled", "disabled"); // Fix the variable name here
  } else {
    counter[index].removeAttribute("disabled"); // Fix the variable name here
  }
}

for (let i = 0; i < purchase.length; i++) {
  purchase[i].addEventListener("click", function () {
    const totalAmount = counts.reduce((acc, curr) => acc + curr, 0);

    if (totalAmount === 0) {
      alert("Amount empty! Please get amount!");
    } else {
      alert(`You have purchased a total of ${totalAmount} items!`);
    }
  });
}


burgir.addEventListener("click", () => {
  burgir.classList.toggle("active");
  navMenu.classList.toggle("active");
})







