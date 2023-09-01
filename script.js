const burgir = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

const purchase = document.getElementById("purchase-Button");
const increase = document.getElementsByClassName("increase-BTN");

const counter = document.getElementsByClassName("count");

let count = 0;

let counts = [0, 0, 0, 0, 0, 0];

burgir.addEventListener("click", () => {
    burgir.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

//APPLE 1

for (var i = 0; i < increase.length; i++) {
  increase[i].addEventListener("click", function (index) {
      return function () {
          counts[index] += 1;
          counter[index].innerHTML = counts[index];
      };
  }(i));
}

// increase[5].addEventListener("click", function () {
//   count += 1;
//   counter[5].innerHTML = count;
// });

// document.getElementById("decrease-BTN").onclick = function(){
//   if(count == 0){
//       document.getElementById("decrease-BTN").disable = true;
     
//   }
//   else{
//     count -= 1;
//     document.getElementsByClassName("count").innerHTML = count;
//   }
  
// }

purchase.onclick =() => {
    if(counts ===0 ){
      alert("Amount empty! please get amount!");
    }
    else{
      alert(`You have purchased this ${counts} amount!`);
    }
   
}




