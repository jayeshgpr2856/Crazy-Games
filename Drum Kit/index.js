// Detecting Button Press
var noOfDrumButtons =  document.querySelectorAll(".drum").length;
for(var index = 0; index < noOfDrumButtons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });  
}


// Detecting Keyboard Press

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
    console.log(event);
});

function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        
    
        default: console.log(buttonInnerHTML);
    }
}

// Applying FlashLight like Animation to buttons

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    // adding a class to a button
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}