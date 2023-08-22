const burgir = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

const purchase = document.getElementById("purchase-Button");

let count = 0;

burgir.addEventListener("click", () => {
    burgir.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

//APPLE 1
document.getElementById("increase-BTN").onclick = function(){
    count += 1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("decrease-BTN").onclick = function(){
  if(count == 0){
      document.getElementById("decrease-BTN").disable = true;
     
  }
  else{
    count -= 1;
    document.getElementById("count").innerHTML = count;
  }
  
}

purchase.onclick =() => {
    if(count ===0 ){
      alert("Amount empty! please get amount!");
    }
    else{
      alert(`You have purchased this ${count} amount!`);
    }
   
}




