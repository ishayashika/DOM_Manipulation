let current_count = document.getElementById("current_count");
let clear_btn = document.getElementById("clear-btn");
let demo = document.getElementById("demo");
let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let count = 1;


document.body.style.backgroundColor = "black";

document.getElementById("current_count").style.color = "white";
document.getElementById("current_count").style.borderBottom = "2px solid white";
document.getElementById("current_count").style.display = "inline-block";

document.getElementById("clear-btn").style.backgroundColor = "black";
document.getElementById("clear-btn").style.color = "white";
document.getElementById("clear-btn").style.borderBlockColor = "white";

document.getElementById("increase").style.borderBlockColor = "black";
document.getElementById("decrease").style.borderBlockColor = "black";

function incre() {
  count++;
  updateCount();
}

function decre() {
  if (count > 0) {
    count--;
    updateCount();
  }
}

function updateCount() {
  current_count.textContent = "Your current count is: " + count;
  if (count > 0) {
    clear_btn.style.display = "inline-block"; //show
    decrease.style.opacity = 1;
    demo.style.display="none";
    decrease.style.cursor = "pointer";
    decrease.style.backgroundColor = "white";
  }
  if (count === 0) {
    clear_btn.style.display = "none"; //show
    demo.textContent = "Error : Cannot go below 0";
    demo.style.display="block";
    decrease.style.opacity = 0.5;
    decrease.style.cursor = "not-allowed";
    decrease.style.backgroundColor = "lightblue";
  }
}

function clear_button(){
  clear_btn.style.display="none";
}