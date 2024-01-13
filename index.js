
let bonkSound = document.querySelector("button");


var bonk = new Audio("Bonk.mp3");
   



bonkSound.addEventListener("click", (e) => {
    bonk.play();
    rotate();
    })


function rotate(){

    var activeButton = document.querySelectorAll("img")[1];
    
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed"); 
    }, 150);
}
