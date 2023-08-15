const burgir = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

let count = 0;

burgir.addEventListener("click", () => {
    burgir.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

document.getElementById("increase-BTN").onclick = function(){
    count += 1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("decrease-BTN").onclick = function(){
  count -= 1;
  document.getElementById("count").innerHTML = count;
}

// function increase(){
//     count += 1;
//     document.querySelectorAll("#count").innerHTML = count;
// }