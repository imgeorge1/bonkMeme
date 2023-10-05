


document.querySelector("button").addEventListener("click", function(){

    var bark = new Audio("Bonk.mp3");
    bark.play()
    
    
    
    var activeButton = document.querySelectorAll("img")[1];
    
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed"); 
    }, 150);
})